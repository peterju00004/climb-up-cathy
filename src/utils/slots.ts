import React from 'react';

export function getSlot(children: React.ReactNode, slotName: string): React.ReactNode[] {
    return React.Children.toArray(children).filter(child => {
        return React.isValidElement(child) && (child.props as { slot: string }).slot === slotName;
    });
}