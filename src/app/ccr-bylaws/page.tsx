import Link from "next/link"

export default function ccrBylaws() {
    return (
        <div className="p-5">
            <h1 className="text-4xl">Documents</h1>
            <ul className="p-5">
            <li><span className="text-2xl">CC&R&apos;s </span>(
             <a href='https://r2.belmontparkhoa.net/ccrs/ccrs_2026_04_16.pdf'>PDF</a>
             <span> </span>
             <a href='https://r2.belmontparkhoa.net/ccrs/ccrs_2026_04_16.html'>HTML</a>
            )
            </li>
            <li className="text-2xl"><a href='https://r2.belmontparkhoa.net/bylaws/bylaws_amended_nov_2025.pdf'>Articles of Incorporation & By-Laws</a></li>
            </ul>
            <h1 className="py-5 text-4xl">Requests for Exterior Alteration or Improvement</h1>
            <p className="px-5">In accordance with the Declaration of Covenants, Conditions and Restrictions(CC&R&apos;s) for the Belmont Park
                Subdivision, Section 2.2 states:</p>
                <blockquote className="py-5 px-10 italic">
                No exterior improvements to the front of the property which will ultimately
                affect the visibility of any above ground improvement shall be built, erected,
                placed or materially altered, including without limitation, change of exterior
                colors or materials, on the Property, unless and until the building plans,
                specifications, and plot plan have been reviewed in advance by the Architectural
                Committee and the same have been reviewed and approved by the
                CC&R Architectural Committee. This includes landscaping of any kind (i.e.
                xeriscaping), solar panels (solar panel restriction to be compliant with Idaho
                Code 55-3208) or other exterior improvements.  The approval or disapproval of a
                submitted proposal will be determined by how it fits in and does not detract
                from the surrounding neighbors or Belmont Park, a residential neighborhood, as a
                whole. Any proposal which is deemed, by the Board, to be detrimental to the
                appearance of the surrounding area or not in harmony with Belmont Park, as a
                whole, shall be rejected.
                </blockquote>

            <p className="p-5">
                In the event that you would like to make a change that falls within Section 2.2 parameters, please send an email to
                <a href="mailto:bphoa.boise@gmail.com"><b> BPHOA.Boise@gmail.com</b></a> and include the following information:
            </p>
            <ul className="list-disc list-inside px-5">
                <li>Current property owner of record</li>
                <li>Address of the property</li>
                <li>Description of the proposed change</li>
                <li>Start and end dates of the proposed change</li>
                <li>Contractor name and credentials (licensed and bonded with liability insurance), if applicable</li>
                <li>Any additional sketches, mockups, etc that describe the proposed change</li>
            </ul>
            <p className="p-5">
                Please allow up to 15 days for the approval process.
            </p>
        </div>
    )
}