import Legend from "../legend/legend";
import styles from "./instruction.module.scss";

export type InstructionProps = {
    rotateCounterclockwise: boolean;
    interact: boolean;
    moveForward: boolean;
    rotateClockwise: boolean;
    scrollToClimb: boolean;
};

export function Instruction(props: InstructionProps) {
    return (
        <div className={styles.instruction}>
            <div className={styles.grid}>
                <Legend label='Rotate Counterclockwise' withBackground disabled={!props.rotateCounterclockwise}>
                    <span slot='block'>
                        A
                    </span>
                    <div slot='block'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.292893 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM16 8V7L1 7V8V9L16 9V8Z" fill="#F0F0F0" />
                        </svg>
                    </div>
                </Legend>

                <Legend label='Move Forward' withBackground disabled={!props.moveForward}>
                    <span slot='block'>W</span>
                </Legend>

                <Legend label='Rotate Clockwise' withBackground disabled={!props.rotateClockwise}>
                    <span slot='block'>
                        D
                    </span>
                    <div slot='block'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.7071 7.29289C16.0976 7.68342 16.0976 8.31658 15.7071 8.70711L9.34315 15.0711C8.95262 15.4616 8.31946 15.4616 7.92893 15.0711C7.53841 14.6805 7.53841 14.0474 7.92893 13.6569L13.5858 8L7.92893 2.34315C7.53841 1.95262 7.53841 1.31946 7.92893 0.928932C8.31946 0.538408 8.95262 0.538408 9.34315 0.928932L15.7071 7.29289ZM0 8L0 7L15 7V8V9L0 9L0 8Z" fill="#F0F0F0" />
                        </svg>
                    </div>
                </Legend>

                <Legend label='Interact' withBackground type='long' disabled={!props.interact}>
                    <div slot='block'>
                        <svg width="62" height="9" viewBox="0 0 62 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 0V8H61V0" stroke="#F0F0F0" stroke-width="2" />
                        </svg>
                    </div>
                </Legend>
            </div>
            <div>
                <Legend label='Scroll to Climb' type='large' disabled={!props.scrollToClimb}>
                    <div slot='block'>
                        <svg width="64" height="88" viewBox="0 0 64 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_19_255)">
                                <ellipse cx="30" cy="42" rx="28" ry="40" fill="#2F2F2F" />
                            </g>
                            <path d="M40.7474 42.0148C40.7474 36.0149 43.7475 34.0149 44.7474 26.0148C45.7474 18.0147 43.5434 13.5992 36 13.0147C33.3352 13.0943 32.1432 13.1497 30 15C28.1099 13.555 25.934 13.0688 23 13.0147C17.0898 12.6823 12.7474 18.0147 14.7474 26.0148C16.7474 34.0149 18.7474 36.0149 18.7474 42.0148C18.7474 48.0147 11.7474 57.0147 14.7474 64.0148C17.7474 71.0149 29.7474 71.0147 29.7474 71.0147C29.7474 71.0147 41.7474 71.0149 44.7474 64.0148C47.7474 57.0147 40.7474 48.0147 40.7474 42.0148Z" fill="#5F5F5F" />
                            <path d="M30 14V32" stroke="#2F2F2F" />
                            <rect x="29" y="17" width="2" height="8" rx="1" fill="#FFF4E6" />
                            <defs>
                                <filter id="filter0_d_19_255" x="0" y="0" width="64" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="2" dy="2" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_19_255" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_19_255" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </Legend>
            </div>
        </div>
    )
}

export default Instruction;