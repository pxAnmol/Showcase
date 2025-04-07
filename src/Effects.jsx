import { 
  EffectComposer, 
  Bloom, 
  Vignette, 
  HueSaturation,
  BrightnessContrast,
  SMAA,
  ToneMapping
} from "@react-three/postprocessing";
import { BlendFunction, KernelSize, ToneMappingMode } from "postprocessing";

const Effects = () => {
  return (
    <EffectComposer multisampling={0}>
      <SMAA />
      <Bloom 
        intensity={1}
        luminanceThreshold={0.2}
        luminanceSmoothing={0.8}
        kernelSize={KernelSize.MEDIUM}
        mipmapBlur
      />
      <HueSaturation
        blendFunction={BlendFunction.NORMAL}
        saturation={0.3}
        hue={0.1}
      />
      <BrightnessContrast
        brightness={0.05}
        contrast={0.15} 
      />
      <ToneMapping
        mode={ToneMappingMode.REINHARD}
        adaptive={true}
        resolution={512}
      />
      <Vignette 
        eskil={false} 
        offset={0.35} 
        darkness={0.75}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  );
};

export default Effects;
