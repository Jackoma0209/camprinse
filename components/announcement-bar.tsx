import { commerce } from "@/lib/commerce";

export function AnnouncementBar() {
  return (
    <div className="bg-charcoal-green px-4 py-2 text-center text-sm font-semibold text-cream">
      {commerce.announcement}
    </div>
  );
}
