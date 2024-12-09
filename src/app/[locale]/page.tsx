import PageLayout from '@/components/layout/PageLayout';
import ContactUs from '@/components/ui/landing/ContactUs';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <PageLayout>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>{t('title')}</h1>
        <Link href="/about">{t('about')}</Link>
        <div className="h-screen">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore non
          ipsam laudantium labore corporis ducimus unde nemo! Quod cumque
          similique doloribus hic labore dignissimos nemo accusamus explicabo,
          voluptatibus praesentium enim!
        </div>
        <div className="h-screen">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore non
          ipsam laudantium labore corporis ducimus unde nemo! Quod cumque
          similique doloribus hic labore dignissimos nemo accusamus explicabo,
          voluptatibus praesentium enim!
        </div>
        <div className="h-screen">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore non
          ipsam laudantium labore corporis ducimus unde nemo! Quod cumque
          similique doloribus hic labore dignissimos nemo accusamus explicabo,
          voluptatibus praesentium enim!
        </div>
      </div>
      <ContactUs />
    </PageLayout>
  );
}
