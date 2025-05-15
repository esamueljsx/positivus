import {
  AmazonIcon,
  DribbleIcon,
  HubSpotIcon,
  NetflixIcon,
  NotionIcon,
  ZoomIcon,
} from "../ui/icons";

export default function Cloud() {
  return (
    <section className="content-wrapper overflow-hidden py-5 lg:py-7">
      <div className="relative block w-full space-y-5 lg:space-y-0">
        <div className="animate-scroll flex items-center justify-center gap-10 grayscale-100">
          <ZoomIcon className="h-12 shrink-0" />
          <NetflixIcon className="h-12 shrink-0" />
          <NotionIcon className="h-12 shrink-0" />
          <HubSpotIcon className="h-12 shrink-0" />
          <DribbleIcon className="h-12 shrink-0" />
          <AmazonIcon className="h-12 shrink-0" />

          <ZoomIcon className="h-12 shrink-0" />
          <NetflixIcon className="h-12 shrink-0" />
          <NotionIcon className="h-12 shrink-0" />
          <HubSpotIcon className="h-12 shrink-0" />
          <DribbleIcon className="h-12 shrink-0" />
          <AmazonIcon className="h-12 shrink-0" />
        </div>
        {/* Invincible */}
        <div className="animate-scroll-reverse flex items-center gap-10 grayscale-100 lg:hidden">
          <AmazonIcon className="h-12 shrink-0" />
          <DribbleIcon className="h-12 shrink-0" />
          <HubSpotIcon className="h-12 shrink-0" />
          <NotionIcon className="h-12 shrink-0" />
          <NetflixIcon className="h-12 shrink-0" />
          <ZoomIcon className="h-12 shrink-0" />

          <AmazonIcon className="h-12 shrink-0" />
          <DribbleIcon className="h-12 shrink-0" />
          <HubSpotIcon className="h-12 shrink-0" />
          <NotionIcon className="h-12 shrink-0" />
          <NetflixIcon className="h-12 shrink-0" />
          <ZoomIcon className="h-12 shrink-0" />
        </div>
      </div>
    </section>
  );
}
