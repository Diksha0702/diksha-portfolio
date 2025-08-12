declare module "*.md" {
  const Component: AstroComponentFactory;
  export const frontmatter: Record<string, any>;
  export default Component;
}
