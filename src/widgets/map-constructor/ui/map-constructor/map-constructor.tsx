import React from "react";
import { MAP_CONTAINER_ID } from "../../constants";
import { Map } from "../../lib/classes";
import { styles } from "./styles";

export function MapConstructor() {
  const mapRef = React.useRef<Map | null>(null);

  React.useEffect(() => {
    const mapInstance = new Map({ target: MAP_CONTAINER_ID });
    mapRef.current = mapInstance;

    return () => {
      mapInstance.destroy();
    };
  }, []);

  return <div className={styles.base} id={MAP_CONTAINER_ID}></div>;
}
