import Image from "next/image";
import { Phone, Clock3, MapPin } from "lucide-react";
import logo from "../../assets/logo.png";

function InfoItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  href?: string;
}) {
  const Content = (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-orange-500/80">
        <span className="text-orange-500">{icon}</span>
      </div>
      <div className="leading-5">
        <div className="text-sm text-gray-500">{label}</div>
        <div className="font-semibold text-gray-900">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="group block">{Content}</a>
  ) : (
    Content
  );
}

export default function HeaderTop() {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center md:hidden">
          <Image
            src={logo}
            alt="Logo"
            priority
            className="h-10 w-auto"
          />
        </div>
        <div className="hidden md:grid md:grid-cols-4 md:items-center md:gap-4 py-4">
          <div className="flex items-center">
            <Image src={logo} alt="Logo" className="h-14 w-auto" />
          </div>

          <div className="md:border-l md:border-gray-200 md:pl-6">
            <InfoItem
              icon={<Phone className="h-4 w-4" aria-hidden="true" />}
              label="Call Us Today"
              value={<span>(934) 256 7850</span>}
              href="tel:+19342567850"
            />
          </div>

          <div className="md:border-l md:border-gray-200 md:pl-6">
            <InfoItem
              icon={<Clock3 className="h-4 w-4" aria-hidden="true" />}
              label="Working Hours"
              value={<span>Mon - Fri: 9 am to 6 pm</span>}
            />
          </div>

          <div className="md:border-l md:border-gray-200 md:pl-6">
            <InfoItem
              icon={<MapPin className="h-4 w-4" aria-hidden="true" />}
              label="950 Zalpaca Avenue"
              value={<span>Virginia, 32809</span>}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
