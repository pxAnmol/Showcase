import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Car(props) {
  const { nodes, materials } = useGLTF("/rolls-royce-com.glb");

  const wheelFrontLeft = useRef();
  const wheelFrontRight = useRef();
  const wheelBackLeft = useRef();
  const wheelBackRight = useRef();

  useFrame((state, delta) => {
    wheelFrontLeft.current.rotation.x += delta * 7;
    wheelFrontRight.current.rotation.x += delta * 7;
    wheelBackLeft.current.rotation.x += delta * 7;
    wheelBackRight.current.rotation.x += delta * 7;
  });

  return (
    <group {...props} dispose={null}>
      {/* Front Left Wheel */}
      <group
        ref={wheelFrontLeft}
        position={[0.862, 0.346, 1.398]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.157}
      >
        <mesh
          geometry={nodes.rrghost_wheel_c_etk_wheel_05a_0.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh
          geometry={nodes.rrghost_wheel_c_rrghost_main_b_0.geometry}
          material={materials.PaletteMaterial001}
        />
      </group>

      {/* Front Right Wheel */}
      <group
        ref={wheelFrontRight}
        position={[-0.853, 0.346, 1.398]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={1.157}
      >
        <mesh
          geometry={nodes.rrghost_wheel_c002_etk_wheel_05a_0.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh
          geometry={nodes.rrghost_wheel_c002_rrghost_main_b_0.geometry}
          material={materials.PaletteMaterial001}
        />
      </group>

      {/* Back Left Wheel */}
      <group
        ref={wheelBackLeft}
        position={[0.862, 0.346, -1.807]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.157}
      >
        <mesh
          geometry={nodes.rrghost_wheel_c001_etk_wheel_05a_0.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh
          geometry={nodes.rrghost_wheel_c001_rrghost_main_b_0.geometry}
          material={materials.PaletteMaterial001}
        />
      </group>

      {/* Back Right Wheel */}
      <group
        ref={wheelBackRight}
        position={[-0.853, 0.346, -1.807]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={1.157}
      >
        <mesh
          geometry={nodes.rrghost_wheel_c003_etk_wheel_05a_0.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh
          geometry={nodes.rrghost_wheel_c003_rrghost_main_b_0.geometry}
          material={materials.PaletteMaterial001}
        />
      </group>

      <mesh
        geometry={nodes.rrghost_decals_gauges_signal_R_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.391, 0.984, 0.474]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_decals_gauges_signal_L_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.391, 0.984, 0.474]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_decals_gauges_abs_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.391, 0.984, 0.474]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_decals_gauges_highbeam_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.391, 0.984, 0.474]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_decals_gauges_esc_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.391, 0.984, 0.474]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_decals_gauges_tcs_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.391, 0.984, 0.474]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_decals_gauges_parkingbrake_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.391, 0.984, 0.474]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_decals_gauges_lowbeam_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.391, 0.984, 0.474]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_needle_speedo_rrghost_main_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.395, 0.964, 0.456]}
        rotation={[-2.621, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_needle_tacho_rrghost_main_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.301, 0.955, 0.453]}
        rotation={[-2.621, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_tubs_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.57, 1.42]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_engine_gavril_v8_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.009, 0.716, 1.38]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_engine_rrghost_rrlogo001_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.009, 0.716, 1.38]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_engine_rrghost_main_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.009, 0.716, 1.38]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_engine_etk_wheel_05a002_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.009, 0.716, 1.38]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_engine_etk_engine_i6_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.009, 0.716, 1.38]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_exhaust_R_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.169, 0.239, -1.029]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_exhaust_L_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.169, 0.239, -1.029]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_ransmission_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.356, 0.782]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_intercooler_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.378, 1.863]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_upperarm_R_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.445, -1.315]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_transfercase_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.063, 0.303, 0.353]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_tierod_R_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.311, -1.965]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_tierod_F_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.225, 1.52]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_swaybar_R_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.42, -1.773]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_swaybar_F_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.408, 1.54]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_subframe_R_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.396, -1.772]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_subframe_F_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.001, 0.266, 1.356]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_strutbrace_F_etk_engine_i6_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.896, 1.251]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_strut_F_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.728, 1.348]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_steeringbox_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.236, 1.496]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_spring_R_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.408, -1.879]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_shock_R_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.517, -1.855]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_radsupport_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.674, 1.867]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_radiator_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.013, 0.613, 1.823]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_lowerarm_R_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.252, -1.804]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_lowerarm_F_b_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.281, 1.581]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_lowerarm_F_a_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.212, 1.383]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_hub_R_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.324, -1.799]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_hub_F_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.337, 1.4]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_heatshield_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.204, -0.169]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_halfshaft_R_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.33, -1.804]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_halfshaft_F_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.325, 1.4]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_fueltank_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.293, -1.344]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_engbaycrap_etk_engine_i6_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.009, 0.81, 1.42]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_diff_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.325, -1.758]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_bumperbar_F_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.53, 2.008]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_exhausttip_R_b_rrghost_main_c_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.497, 0.281, -2.883]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_exhausttip_R_b_rrghost_main_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.497, 0.281, -2.883]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_exhausttip_L_b_rrghost_main_c_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.497, 0.281, -2.883]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_exhausttip_L_b_rrghost_main_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.497, 0.281, -2.883]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_exhausttip_L_rrghost_main_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.497, 0.281, -2.883]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_fender_L_rrghost_paint_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.821, 0.698, 1.232]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_fender_L_rrghost_rolls_royce_logo_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.821, 0.698, 1.232]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_fender_L_rrghost_paint_b_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.821, 0.698, 1.232]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_fender_L_rrghost_off_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.821, 0.698, 1.232]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_fender_L_rrghost_glass_0.geometry}
        material={materials.PaletteMaterial002}
        position={[0.821, 0.698, 1.232]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_fender_L_rrghost_signal_L_b_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.821, 0.698, 1.232]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_fender_L_rrghost_main_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.821, 0.698, 1.232]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_bumper_F_rrghost_paint_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.008, 0.379, 2.095]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_bumper_F_rrghost_paint_b_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.008, 0.379, 2.095]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_bumper_F_rrghost_glass_0.geometry}
        material={materials.PaletteMaterial002}
        position={[-0.008, 0.379, 2.095]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_bumper_F_rrghost_main_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.008, 0.379, 2.095]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_bumper_F_rrghost_signal_L_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.008, 0.379, 2.095]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_bumper_F_rrghost_main_b001_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.008, 0.379, 2.095]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_bumper_F_rrghost_runninglight_b_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.008, 0.379, 2.095]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_bumper_F_rrghost_signal_R_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.008, 0.379, 2.095]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_exhausttip_R_rrghost_main_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.497, 0.281, -2.883]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_dash_rrghost_glass_0.geometry}
        material={materials.PaletteMaterial002}
        position={[-0.087, 0.772, 0.127]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_dash_rrghost_main_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.087, 0.772, 0.127]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_dash_rrghost_main_0_1.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.087, 0.772, 0.127]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_dash_rrghost_interior_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.087, 0.772, 0.127]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_dash_rrghost_wood_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.087, 0.772, 0.127]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_dash_rrghost_leatherblue_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.087, 0.772, 0.127]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_dash_rrghost_leatherlight_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.087, 0.772, 0.127]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_dash_rrghost_screen_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.087, 0.772, 0.127]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_dash_rrghost_interior_alpha_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.087, 0.772, 0.127]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_dash_rrghost_speaker_black_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.087, 0.772, 0.127]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_dash_rrghost_carpet_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.087, 0.772, 0.127]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_dash_rrghost_rrlogo_alpha1_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.087, 0.772, 0.127]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_dash_rrghost_interior_alpha_2_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.087, 0.772, 0.127]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_trunk_b_rrghost_paint_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.009, 0.869, -2.836]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_trunk_b_rrghost_main_c_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.009, 0.869, -2.836]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_trunk_b_rrghost_rolls_royce_logo_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.009, 0.869, -2.836]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_trunk_b_rrghost_paint_b_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.009, 0.869, -2.836]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_trunk_b_rrghost_off_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.009, 0.869, -2.836]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_trunk_b_rrghost_main_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.009, 0.869, -2.836]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_trunk_b_rrghost_alcantara_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.009, 0.869, -2.836]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_headlight_L_rrghost_main_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.666, 0.727, 1.957]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_headlight_L_rrghost_lights_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.666, 0.727, 1.957]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_headlight_L_rrghost_runninglight_0.geometry}
        material={materials.PaletteMaterial003}
        position={[0.666, 0.727, 1.957]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_taillight_R_rrghost_main_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.669, 0.772, -2.813]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_taillight_R_rrghost_lights_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.669, 0.772, -2.813]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_taillight_R_rrghost_reverselight_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.669, 0.772, -2.813]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_taillight_R_rrghost_signal_L_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.669, 0.772, -2.813]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_headlightglass_L_rrghost_off_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.653, 0.729, 1.971]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_headlightglass_L_rrghost_glass_0.geometry}
        material={materials.PaletteMaterial002}
        position={[0.653, 0.729, 1.971]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_headlightglass_L_rrghost_headlight_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.653, 0.729, 1.971]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_headlightglass_R_rrghost_off_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.653, 0.729, 1.971]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_headlightglass_R_rrghost_glass_0.geometry}
        material={materials.PaletteMaterial002}
        position={[-0.653, 0.729, 1.971]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_headlightglass_R_rrghost_headlight_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.653, 0.729, 1.971]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_taillightglass_L_rrghost_glass_0.geometry}
        material={materials.PaletteMaterial002}
        position={[0.674, 0.77, -2.821]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_taillightglass_L_rrghost_glass_b_0.geometry}
        material={materials.PaletteMaterial002}
        position={[0.674, 0.77, -2.821]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_taillightglass_L_rrghost_taillight_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.674, 0.77, -2.821]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_taillightglass_R_rrghost_glass_0.geometry}
        material={materials.PaletteMaterial002}
        position={[-0.674, 0.77, -2.821]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_taillightglass_R_rrghost_taillight_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.674, 0.77, -2.821]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_taillightglass_R_rrghost_glass_b_0.geometry}
        material={materials.PaletteMaterial002}
        position={[-0.674, 0.77, -2.821]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_seats_R_rrghost_glass_0.geometry}
        material={materials.PaletteMaterial002}
        position={[0.008, 0.729, -1.334]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_seats_R_rrghost_main_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.008, 0.729, -1.334]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_seats_R_rrghost_interior_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.008, 0.729, -1.334]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_seats_R_rrghost_wood_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.008, 0.729, -1.334]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_seats_R_rrghost_leatherblue_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.008, 0.729, -1.334]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_seats_R_rrghost_leatherlight_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.008, 0.729, -1.334]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_seats_R_rrghost_perforated_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.008, 0.729, -1.334]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_seats_R_rrghost_rrlogo_alpha_0.geometry}
        material={materials.PaletteMaterial002}
        position={[0.008, 0.729, -1.334]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_seats_R_rrghost_stitching_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.008, 0.729, -1.334]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_seats_R_rrghost_interior_alpha_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.008, 0.729, -1.334]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_seats_R_rrghost_belt_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.008, 0.729, -1.334]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_hood_rrghost_paint_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.001, 0.927, 1.329]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_hood_rrghost_paint_b_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.001, 0.927, 1.329]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_hood_rrghost_main_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.001, 0.927, 1.329]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_hood_rrghost_alcantara_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.001, 0.927, 1.329]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_hood_rrghost_common_black033_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.001, 0.927, 1.329]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_bumper_R_rrghost_paint_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.029, 0.478, -2.93]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_FL_rrghost_paint_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.778, 0.803, -0.04]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_FL_rrghost_paint_b_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.778, 0.803, -0.04]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_FL_rrghost_main_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.778, 0.803, -0.04]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_FL_rrghost_leatherblue_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.778, 0.803, -0.04]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_FL_rrghost_leatherlight_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.778, 0.803, -0.04]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_FL_rrghost_stitching_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.778, 0.803, -0.04]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_FL_rrghost_speaker_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.778, 0.803, -0.04]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_FL_rrghost_rrgreen_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.778, 0.803, -0.04]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_FL_rrghost_main_b001_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.778, 0.803, -0.04]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_FL_rrghost_rrlogo_alpha2_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.778, 0.803, -0.04]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_doorglass_FL_rrghost_glass_0.geometry}
        material={materials.PaletteMaterial002}
        position={[0.752, 1.131, -0.095]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_RL_rrghost_paint_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.761, 0.817, -0.886]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_RL_rrghost_paint_b_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.761, 0.817, -0.886]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_RL_rrghost_main_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.761, 0.817, -0.886]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_RL_rrghost_wood_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.761, 0.817, -0.886]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_RL_rrghost_leatherblue_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.761, 0.817, -0.886]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_RL_rrghost_leatherlight_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.761, 0.817, -0.886]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_RL_rrghost_stitching_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.761, 0.817, -0.886]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_RL_rrghost_interior_alpha_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.761, 0.817, -0.886]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_RL_rrghost_speaker_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.761, 0.817, -0.886]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_RL_rrghost_rrgreen_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.761, 0.817, -0.886]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_RL_rrghost_main_b001_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.761, 0.817, -0.886]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_doorglass_RL_rrghost_glass_0.geometry}
        material={materials.PaletteMaterial002}
        position={[0.714, 1.186, -0.944]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_FR_rrghost_paint_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.765, 0.784, -0.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_FR_rrghost_paint_b_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.765, 0.784, -0.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_FR_rrghost_main_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.765, 0.784, -0.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_FR_rrghost_wood_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.765, 0.784, -0.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_FR_rrghost_leatherblue_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.765, 0.784, -0.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_FR_rrghost_leatherlight_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.765, 0.784, -0.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_FR_rrghost_speaker_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.765, 0.784, -0.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_FR_rrghost_rrgreen_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.765, 0.784, -0.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_FR_rrghost_main_b001_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.765, 0.784, -0.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_FR_rrghost_rrlogo_alpha2_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.765, 0.784, -0.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_doorglass_FR_rrghost_glass_0.geometry}
        material={materials.PaletteMaterial002}
        position={[-0.752, 1.131, -0.095]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_RR_rrghost_paint_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.762, 0.819, -0.886]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_RR_rrghost_paint_b_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.762, 0.819, -0.886]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_RR_rrghost_main_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.762, 0.819, -0.886]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_RR_rrghost_wood_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.762, 0.819, -0.886]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_RR_rrghost_leatherblue_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.762, 0.819, -0.886]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_RR_rrghost_leatherlight_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.762, 0.819, -0.886]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_RR_rrghost_interior_alpha_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.762, 0.819, -0.886]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_RR_rrghost_speaker_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.762, 0.819, -0.886]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_RR_rrghost_rrgreen_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.762, 0.819, -0.886]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_door_RR_rrghost_main_b001_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.762, 0.819, -0.886]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_doorglass_RR_rrghost_glass_0.geometry}
        material={materials.PaletteMaterial002}
        position={[-0.714, 1.186, -0.944]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={
          nodes.rrghost_windshield_vehicle_generic_glasswindows2_0.geometry
        }
        material={materials.PaletteMaterial004}
        position={[0, 1.163, 0.35]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_backlight_rrghost_glass_0.geometry}
        material={materials.PaletteMaterial002}
        position={[0, 1.191, -2.042]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_sideglass_L_rrghost_glass_0.geometry}
        material={materials.PaletteMaterial002}
        position={[0.719, 1.136, -1.421]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_sideglass_R_rrghost_glass_0.geometry}
        material={materials.PaletteMaterial002}
        position={[-0.719, 1.136, -1.421]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_sunroof_rrghost_glass_0.geometry}
        material={materials.PaletteMaterial002}
        position={[0, 1.453, -0.63]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_sunroof_rrghost_main_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 1.453, -0.63]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_steer_rrghost_leatherblue_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.395, 0.872, 0.171]}
        rotation={[-2.891, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_steer_rrghost_rrlogo002_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.395, 0.872, 0.171]}
        rotation={[-2.891, 0, 0]}
      />
      <mesh
        geometry={nodes["rrghost_steer_����������������_0"].geometry}
        material={materials.PaletteMaterial001}
        position={[-0.395, 0.872, 0.171]}
        rotation={[-2.891, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_steer_rrghost_interior_alpha_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.395, 0.872, 0.171]}
        rotation={[-2.891, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_headlight_R_rrghost_main_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.666, 0.727, 1.957]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_headlight_R_rrghost_lights_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.666, 0.727, 1.957]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_headlight_R_rrghost_runninglight_0.geometry}
        material={materials.PaletteMaterial003}
        position={[-0.666, 0.727, 1.957]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_mirror_R_rrghost_paint_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.936, 1.062, 0.201]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_mirror_R_rrghost_main_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.936, 1.062, 0.201]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_mirror_R_mirror_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.936, 1.062, 0.201]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_mirror_L_rrghost_paint_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.936, 1.062, 0.201]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_mirror_L_mirror_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.936, 1.062, 0.201]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_wipers_rrghost_main_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.093, 0.993, 0.713]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_taillight_L_rrghost_main_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.669, 0.772, -2.813]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_taillight_L_rrghost_lights_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.669, 0.772, -2.813]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_taillight_L_rrghost_reverselight_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.669, 0.772, -2.813]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_taillight_L_rrghost_signal_L_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.669, 0.772, -2.813]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_seat_FR_rrghost_main_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.401, 0.689, -0.433]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_seat_FR_rrghost_interior_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.401, 0.689, -0.433]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_seat_FR_rrghost_wood_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.401, 0.689, -0.433]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_seat_FR_rrghost_leatherblue_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.401, 0.689, -0.433]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_seat_FR_rrghost_leatherlight_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.401, 0.689, -0.433]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_seat_FR_rrghost_perforated_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.401, 0.689, -0.433]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_seat_FR_rrghost_rrlogo_alpha_0.geometry}
        material={materials.PaletteMaterial002}
        position={[-0.401, 0.689, -0.433]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_seat_FR_rrghost_screen_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.401, 0.689, -0.433]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_seat_FR_rrghost_stitching_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.401, 0.689, -0.433]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_seat_FL_rrghost_main_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.401, 0.689, -0.433]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_seat_FL_rrghost_interior_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.401, 0.689, -0.433]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_seat_FL_rrghost_wood_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.401, 0.689, -0.433]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_seat_FL_rrghost_leatherblue_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.401, 0.689, -0.433]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_seat_FL_rrghost_leatherlight_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.401, 0.689, -0.433]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_seat_FL_rrghost_perforated_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.401, 0.689, -0.433]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_seat_FL_rrghost_rrlogo_alpha_0.geometry}
        material={materials.PaletteMaterial002}
        position={[0.401, 0.689, -0.433]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_seat_FL_rrghost_screen_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.401, 0.689, -0.433]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_seat_FL_rrghost_stitching_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.401, 0.689, -0.433]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_grille_b_rrghost_main_c_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.734, 2.16]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_grille_b_rrghost_rolls_royce_logo_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.734, 2.16]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_grille_b_rrghost_paint_b_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.734, 2.16]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_grille_b_rrghost_main_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.734, 2.16]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_grille_b_rrghost_common_black033_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.734, 2.16]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_grille_b_rrghost_radiator_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0, 0.734, 2.16]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_fender_R_b_rrghost_paint_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.822, 0.698, 1.232]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_fender_R_b_rrghost_main_c_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.822, 0.698, 1.232]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_fender_R_b_rrghost_rolls_royce_logo_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.822, 0.698, 1.232]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_fender_R_b_rrghost_paint_b_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.822, 0.698, 1.232]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_fender_R_b_rrghost_off_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.822, 0.698, 1.232]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_fender_R_b_rrghost_glass_0.geometry}
        material={materials.PaletteMaterial002}
        position={[-0.822, 0.698, 1.232]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_fender_R_b_rrghost_signal_R_b_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.822, 0.698, 1.232]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_body_rrghost_paint_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.016, 0.898, -1.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_body_rrghost_paint_b_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.016, 0.898, -1.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_body_rrghost_glass_0.geometry}
        material={materials.PaletteMaterial002}
        position={[-0.016, 0.898, -1.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_body_rrghost_main_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.016, 0.898, -1.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_body_mirror_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.016, 0.898, -1.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_body_rrghost_interior_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.016, 0.898, -1.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_body_rrghost_leatherblue_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.016, 0.898, -1.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_body_rrghost_leatherlight_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.016, 0.898, -1.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_body_rrghost_perforated_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.016, 0.898, -1.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_body_rrghost_stitching_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.016, 0.898, -1.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_body_rrghost_interior_alpha_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.016, 0.898, -1.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_body_rrghost_detail_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.016, 0.898, -1.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_body_rrghost_speaker_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.016, 0.898, -1.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_body_rrghost_rrgreen_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.016, 0.898, -1.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_body_rrghost_main_b001_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.016, 0.898, -1.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_body_rrghost_goodwood_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.016, 0.898, -1.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_body_rrghost_badges_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.016, 0.898, -1.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_body_rrghost_speaker_black_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.016, 0.898, -1.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_body_rrghost_leatherdark_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.016, 0.898, -1.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_body_rrghost_carpet_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.016, 0.898, -1.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_body_rrghost_belt_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.016, 0.898, -1.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_body_rrghost_carpet1_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.016, 0.898, -1.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_body_rrghost_taillight_b_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.016, 0.898, -1.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.rrghost_body_rrghost_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.016, 0.898, -1.018]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes["Object_4003_Scene_-_Root_0"].geometry}
        material={materials.PaletteMaterial001}
        position={[0.772, 0.346, 1.398]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.217, 1.164, 1.164]}
      />
      <mesh
        geometry={nodes.amdb11_brakedisc_FR003_amdb11_brake002_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.761, 0.346, 1.399]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={1.019}
      />
      <mesh
        geometry={nodes.amdb11_brakedisc_FR003_amdb11_misc_chrome002_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.761, 0.346, 1.399]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={1.019}
      />
      <mesh
        geometry={nodes.amdb11_brakedisc_FR003_amdb11_misc002_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.761, 0.346, 1.399]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={1.019}
      />
      <mesh
        geometry={nodes.amdb11_brakedisc_FR003_amdb11_badging002_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.761, 0.346, 1.399]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={1.019}
      />
      <mesh
        geometry={nodes.amdb11_brakedisc_FR003_amdb11_caliper002_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.761, 0.346, 1.399]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={1.019}
      />
      <mesh
        geometry={nodes["Object_4001_Scene_-_Root_0"].geometry}
        material={materials.PaletteMaterial001}
        position={[0.772, 0.346, -1.807]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[1.217, 1.164, 1.164]}
      />
      <mesh
        geometry={nodes.amdb11_brakedisc_FR002_amdb11_brake002_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.761, 0.346, -1.806]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={1.019}
      />
      <mesh
        geometry={nodes.amdb11_brakedisc_FR002_amdb11_misc_chrome002_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.761, 0.346, -1.806]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={1.019}
      />
      <mesh
        geometry={nodes.amdb11_brakedisc_FR002_amdb11_misc002_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.761, 0.346, -1.806]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={1.019}
      />
      <mesh
        geometry={nodes.amdb11_brakedisc_FR002_amdb11_badging002_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.761, 0.346, -1.806]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={1.019}
      />
      <mesh
        geometry={nodes.amdb11_brakedisc_FR002_amdb11_caliper002_0.geometry}
        material={materials.PaletteMaterial001}
        position={[0.761, 0.346, -1.806]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={1.019}
      />
      <mesh
        geometry={nodes["Object_4002_Scene_-_Root_0"].geometry}
        material={materials.PaletteMaterial001}
        position={[-0.763, 0.346, 1.398]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[1.217, 1.164, 1.164]}
      />
      <mesh
        geometry={nodes.amdb11_brakedisc_FR004_amdb11_brake002_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.751, 0.346, 1.399]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.019}
      />
      <mesh
        geometry={nodes.amdb11_brakedisc_FR004_amdb11_misc_chrome002_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.751, 0.346, 1.399]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.019}
      />
      <mesh
        geometry={nodes.amdb11_brakedisc_FR004_amdb11_misc002_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.751, 0.346, 1.399]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.019}
      />
      <mesh
        geometry={nodes.amdb11_brakedisc_FR004_amdb11_badging002_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.751, 0.346, 1.399]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.019}
      />
      <mesh
        geometry={nodes.amdb11_brakedisc_FR004_amdb11_caliper002_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.751, 0.346, 1.399]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.019}
      />
      <mesh
        geometry={nodes["Object_4004_Scene_-_Root_0"].geometry}
        material={materials.PaletteMaterial001}
        position={[-0.763, 0.346, -1.807]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[1.217, 1.164, 1.164]}
      />
      <mesh
        geometry={nodes.amdb11_brakedisc_FR005_amdb11_brake002_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.751, 0.346, -1.806]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.019}
      />
      <mesh
        geometry={nodes.amdb11_brakedisc_FR005_amdb11_misc_chrome002_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.751, 0.346, -1.806]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.019}
      />
      <mesh
        geometry={nodes.amdb11_brakedisc_FR005_amdb11_misc002_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.751, 0.346, -1.806]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.019}
      />
      <mesh
        geometry={nodes.amdb11_brakedisc_FR005_amdb11_badging002_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.751, 0.346, -1.806]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.019}
      />
      <mesh
        geometry={nodes.amdb11_brakedisc_FR005_amdb11_caliper002_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.751, 0.346, -1.806]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.019}
      />
      <mesh
        geometry={nodes.rrghost_wheel_c004_etk_wheel_05a_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.395, 0.892, 0.133]}
        rotation={[-1.322, 0, Math.PI / 2]}
        scale={0.654}
      />
      <mesh
        geometry={nodes.rrghost_wheel_c004_rrghost_main_b_0.geometry}
        material={materials.PaletteMaterial001}
        position={[-0.395, 0.892, 0.133]}
        rotation={[-1.322, 0, Math.PI / 2]}
        scale={0.654}
      />
    </group>
  );
}

useGLTF.preload("/rolls-royce-com.glb");
