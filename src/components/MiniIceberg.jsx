import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";

const MiniIceberg = () => {
	const iceberg = useGLTF("./icebergs/Iceberg.glb");
	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor={"black"} />
			<pointLight intensity={1} />
			<primitive object={iceberg.scene} />
		</mesh>
	);
};

const IcebergCanvas = () => {
	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader/>}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<MiniIceberg />
			</Suspense>
            <Preload all/>
		</Canvas>
	);
};

export default IcebergCanvas;
