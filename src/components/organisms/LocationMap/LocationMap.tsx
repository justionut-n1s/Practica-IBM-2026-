import "./LocationMap.css";

interface LocationMapProps {
  embedUrl: string;
  title?: string;
}

// Simplest working option: a Google Maps "embed" iframe (free, no API key needed).
// Get the embedUrl from Google Maps -> Share -> Embed a map -> copy the src="..." value.
function LocationMap({ embedUrl, title = "Location map" }: LocationMapProps) {
  return (
    <div className="location-map">
      <iframe
        src={embedUrl}
        title={title}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default LocationMap;
