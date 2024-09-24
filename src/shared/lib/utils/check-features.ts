import { features } from "../../config";

export function isHasFeature(feature: keyof typeof features) {
  return features[feature];
}
