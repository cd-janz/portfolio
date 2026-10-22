import { svg } from './svg-registry';

interface Props { name: string; size?: string; class?: string; }

/** Solid twin of Icon.astro, backed by the same registry. */
export function Icon(props: Props) {
  return (
    <span
      class={`icon ${props.class ?? ''}`}
      style={{ '--size': props.size ?? '1.25em' }}
      aria-hidden="true"
      innerHTML={svg(props.name)}
    />
  );
}
