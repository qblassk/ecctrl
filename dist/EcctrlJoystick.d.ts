import * as THREE from "three";
import { type ThreeElements } from "@react-three/fiber";
import React, { type ReactNode } from "react";
declare module "three" {
    interface BufferGeometry {
        computeBoundsTree?: () => void;
        disposeBoundsTree?: () => void;
    }
}
declare module "@react-three/fiber" {
    interface ThreeElements {
        mesh: {
            geometry?: THREE.BufferGeometry | THREE.CylinderGeometry;
            material?: THREE.Material | THREE.MeshStandardMaterial;
            [key: string]: any;
        };
    }
}
export declare const EcctrlJoystick: React.ForwardRefExoticComponent<EcctrlJoystickProps & React.RefAttributes<HTMLDivElement>>;
export type EcctrlJoystickProps = {
    children?: ReactNode;
    joystickRunSensitivity?: number;
    joystickPositionLeft?: number;
    joystickPositionBottom?: number;
    joystickHeightAndWidth?: number;
    joystickCamZoom?: number;
    joystickCamPosition?: [x: number, y: number, z: number];
    joystickBaseProps?: ThreeElements["mesh"];
    joystickStickProps?: ThreeElements["mesh"];
    joystickHandleProps?: ThreeElements["mesh"];
    buttonNumber?: number;
    buttonPositionRight?: number;
    buttonPositionBottom?: number;
    buttonHeightAndWidth?: number;
    buttonCamZoom?: number;
    buttonCamPosition?: [x: number, y: number, z: number];
    buttonGroup1Position?: [x: number, y: number, z: number];
    buttonGroup2Position?: [x: number, y: number, z: number];
    buttonGroup3Position?: [x: number, y: number, z: number];
    buttonGroup4Position?: [x: number, y: number, z: number];
    buttonGroup5Position?: [x: number, y: number, z: number];
    buttonLargeBaseProps?: ThreeElements["mesh"];
    buttonSmallBaseProps?: ThreeElements["mesh"];
    buttonTop1Props?: ThreeElements["mesh"];
    buttonTop2Props?: ThreeElements["mesh"];
    buttonTop3Props?: ThreeElements["mesh"];
    buttonTop4Props?: ThreeElements["mesh"];
    buttonTop5Props?: ThreeElements["mesh"];
};
