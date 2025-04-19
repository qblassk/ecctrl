import * as THREE from "three";
import type { camListenerTargetType } from "../Ecctrl";
export declare const useFollowCam: ({ disableFollowCam, disableFollowCamPos, disableFollowCamTarget, camInitDis, camMaxDis, camMinDis, camUpLimit, camLowLimit, camInitDir, camMoveSpeed, camZoomSpeed, camCollisionOffset, camCollisionSpeedMult, camListenerTarget, ...props }?: UseFollowCamProps) => {
    pivot: THREE.Object3D<THREE.Object3DEventMap>;
    followCam: THREE.Object3D<THREE.Object3DEventMap>;
    cameraCollisionDetect: (delta: number) => void;
    joystickCamMove: (movementX: number, movementY: number) => void;
};
export type UseFollowCamProps = {
    disableFollowCam?: boolean;
    disableFollowCamPos?: {
        x: number;
        y: number;
        z: number;
    };
    disableFollowCamTarget?: {
        x: number;
        y: number;
        z: number;
    };
    camInitDis?: number;
    camMaxDis?: number;
    camMinDis?: number;
    camUpLimit?: number;
    camLowLimit?: number;
    camInitDir?: {
        x: number;
        y: number;
    };
    camMoveSpeed?: number;
    camZoomSpeed?: number;
    camCollisionOffset?: number;
    camCollisionSpeedMult?: number;
    camListenerTarget?: camListenerTargetType;
};
