import { withContentCollections } from "@content-collections/next";

//const nextConfig: NextConfig = {
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
}

export default withContentCollections(nextConfig);

// Enable calling `getCloudflareContext()` in `next dev`.
// See https://opennext.js.org/cloudflare/bindings#local-access-to-bindings.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
