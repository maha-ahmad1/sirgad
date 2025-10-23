declare module "vanta/dist/vanta.net.min" {
  type VantaEffect = {
    destroy: () => void;
  };

  const NET: (options: Record<string, unknown>) => VantaEffect;
  export default NET;
}
