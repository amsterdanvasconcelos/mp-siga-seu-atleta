import { getRandomHexColor } from '@/lib/utils';

function CardGrainyBackground() {
  return (
    <div
      suppressHydrationWarning
      className="absolute inset-0 border-2 border-dashed border-black "
      style={{ background: getRandomHexColor() }}
    >
      <div className="size-full" />
    </div>
  );
}

export default CardGrainyBackground;
