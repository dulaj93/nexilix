import JsonLd from '@/components/JsonLd';
import { schemaOrg } from '@/lib/seo';

export default function Head() {
  return (
    <>
      <JsonLd data={schemaOrg.organization()} />
      <JsonLd data={schemaOrg.website()} />
    </>
  );
}
