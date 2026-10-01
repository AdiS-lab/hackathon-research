export interface Point {
  x: number;
  y: number;
  z?: number;
}

/**
 * Calculate the angle (in degrees) at point B formed by points A-B-C.
 */
export function calculateAngle(a: Point, b: Point, c: Point): number {
  const radians =
    Math.atan2(c.y - b.y, c.x - b.x) - Math.atan2(a.y - b.y, a.x - b.x);
  let angle = Math.abs((radians * 180) / Math.PI);
  if (angle > 180) angle = 360 - angle;
  return angle;
}

/**
 * Returns feedback based on how close the current angle is to the target.
 */
export function getAngleFeedback(
  current: number,
  target: number,
  tolerance: number
): { status: "correct" | "close" | "off"; message: string; diff: number } {
  const diff = current - target;
  const absDiff = Math.abs(diff);

  if (absDiff <= tolerance) {
    return { status: "correct", message: "Perfect form!", diff };
  }

  if (absDiff <= tolerance * 2) {
    const direction = diff > 0 ? "less" : "more";
    return {
      status: "close",
      message: `Almost there - adjust ${Math.round(absDiff)}° ${direction}`,
      diff,
    };
  }

  const direction = diff > 0 ? "less" : "more";
  return {
    status: "off",
    message: `Adjust ${Math.round(absDiff)}° ${direction} (current: ${Math.round(current)}°, target: ${target}°)`,
    diff,
  };
}
