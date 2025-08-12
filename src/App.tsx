import { useState } from 'react';
import Instruction from './components/instruction/instruction';
import styles from './App.module.scss';

function App(): React.JSX.Element {
  const [rotateCounterclockwise, setRotateCounterclockwise] = useState<boolean>(true);
  const [rotateClockwise, setRotateClockwise] = useState<boolean>(true);
  const [interact, setInteract] = useState<boolean>(false);
  const [moveForward, setMoveForward] = useState<boolean>(false);
  const [scrollToClimb, setScrollToClimb] = useState<boolean>(false);

  return (
    <div className={styles.app}>
      <Instruction
        rotateCounterclockwise={rotateCounterclockwise}
        interact={interact}
        moveForward={moveForward}
        rotateClockwise={rotateClockwise}
        scrollToClimb={scrollToClimb}
      />
    </div>
  )
}

export default App
