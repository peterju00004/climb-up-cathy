import { useState, useEffect } from 'react';
import Instruction from './components/instruction/instruction';
import Frame from './components/frame/frame';
import styles from './App.module.scss';
import floorData from './data/floor.json';
import type { FloorData } from './types/floor';

const typedFloorData = floorData as FloorData;

function App(): React.JSX.Element {
  // User state
  const [currentFloor] = useState('floor04');
  const [currentPosition, setCurrentPosition] = useState('ELV');
  const [currentAngle, setCurrentAngle] = useState(0);

  // Get current position data
  const position = typedFloorData[currentFloor].positions[currentPosition];
  const currentDirection = position.directions.find(d => d.angle === currentAngle);
  
  // Get all available angles for current position (for image cycling)
  const availableAngles = position.directions.map(d => d.angle).sort((a, b) => a - b);
  const currentAngleIndex = availableAngles.indexOf(currentAngle);

  // Helper function to find the best angle at a new position
  const findBestAngleAtPosition = (positionName: string, preferredAngle: number): number => {
    const newPosition = typedFloorData[currentFloor].positions[positionName];
    const newAvailableAngles = newPosition.directions.map(d => d.angle).sort((a, b) => a - b);
    
    // If the exact angle is available, use it
    if (newAvailableAngles.includes(preferredAngle)) {
      return preferredAngle;
    }
    
    // Otherwise, find the closest angle
    let closest = newAvailableAngles[0];
    let smallestDiff = Math.abs(preferredAngle - closest);
    
    for (const angle of newAvailableAngles) {
      const diff = Math.abs(preferredAngle - angle);
      if (diff < smallestDiff) {
        smallestDiff = diff;
        closest = angle;
      }
    }
    
    return closest;
  };

  // Determine available actions
  const canRotateLeft = availableAngles.length > 1;
  const canRotateRight = availableAngles.length > 1;
  const canMoveForward = !!currentDirection?.forward;
  const canInteract = !!currentDirection?.interact;
  const canScrollToClimb = false;

  // Get images for the current position
  const images = position.directions.map(d => `/floor04/${d.image}`);
  const currentImageIndex = availableAngles.indexOf(currentAngle);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case 'd':
          // Rotate clockwise
          if (canRotateRight) {
            const nextIndex = (currentAngleIndex + 1) % availableAngles.length;
            setCurrentAngle(availableAngles[nextIndex]);
          }
          break;
          
        case 'ArrowLeft':
        case 'a':
          // Rotate counterclockwise
          if (canRotateLeft) {
            const prevIndex = (currentAngleIndex - 1 + availableAngles.length) % availableAngles.length;
            setCurrentAngle(availableAngles[prevIndex]);
          }
          break;
          
        case 'ArrowUp':
        case 'w':
          // Move forward
          if (canMoveForward && currentDirection?.forward) {
            const newPosition = currentDirection.forward;
            // Try to maintain the current angle, or find the closest one
            const bestAngle = findBestAngleAtPosition(newPosition, currentAngle);
            
            setCurrentPosition(newPosition);
            setCurrentAngle(bestAngle);
          }
          break;
          
        case ' ': // Spacebar
        case 'Enter':
          // Interact
          if (canInteract) {
            console.log(`Interacting with: ${currentDirection?.interact}`);
            // Handle specific interactions
            switch (currentDirection?.interact) {
              case 'ELEVATOR':
                console.log('Taking elevator...');
                break;
              case 'STAIRSG':
              case 'STAIRSA':
                console.log('Climbing stairs...');
                break;
              case 'EXIT':
                console.log('Exiting building...');
                break;
            }
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentAngle, currentPosition, canRotateLeft, canRotateRight, canMoveForward, canInteract, currentDirection, availableAngles, currentAngleIndex]);

  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <h1>Floor {currentFloor.substring(5)}</h1>
        <h2>{position.name}</h2>
      </div>
      <div className={styles.frame}>
        <Frame images={images} index={currentImageIndex} />
      </div>
      <div className={styles.instructions}>
        <Instruction
          rotateCounterclockwise={canRotateLeft}
          interact={canInteract}
          moveForward={canMoveForward}
          rotateClockwise={canRotateRight}
          scrollToClimb={canScrollToClimb}
        />
      </div>
      {/* Debug info - remove in production */}
      <div style={{ position: 'fixed', top: 10, left: 10, background: 'rgba(0,0,0,0.8)', color: 'white', padding: '10px', fontSize: '12px' }}>
        <div>Position: {currentPosition} ({position.name})</div>
        <div>Angle: {currentAngle}°</div>
        <div>Image: {currentDirection?.image}</div>
        {currentDirection?.forward && <div>Forward: {currentDirection.forward}</div>}
        {currentDirection?.interact && <div>Interact: {currentDirection.interact}</div>}
      </div>
    </div>
  )
}

export default App