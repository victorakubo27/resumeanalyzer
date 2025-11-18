import { products, companies, resources, socials } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full max-w-[1080px] grid 
      grid-cols-1 
      sm:grid-cols-2 
      md:grid-cols-3 
      lg:grid-cols-[repeat(4,_1fr)_80px] 
      gap-8 px-8 pb-[90px] text-gray-600">
      
      {/* Products */}
      <div>
        <h2 className="text-sm font-medium text-cod-gray mt-3 mb-3">Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product} className="text-dove-gray leading-5 pt-1.5 pb-1.5">
              {product}
            </li>
          ))}
        </ul>
      </div>

      {/* Resources */}
      <div>
        <h2 className="text-sm font-medium text-cod-gray mt-3 mb-3">Resources</h2>
        <ul>
          {resources.map((resource) => (
            <li key={resource} className="text-dove-gray leading-5 pt-1.5 pb-1.5">
              {resource}
            </li>
          ))}
        </ul>
      </div>

      {/* Companies */}
      <div>
        <h2 className="text-sm font-medium text-cod-gray mt-3 mb-3">Companies</h2>
        <ul>
          {companies.map((company) => (
            <li key={company} className="text-dove-gray leading-5 pt-1.5 pb-1.5">
              {company}
            </li>
          ))}
        </ul>
      </div>

      {/* Socials */}
      <div>
        <h2 className="text-sm font-medium text-cod-gray mt-3 mb-3">Socials</h2>
        <ul>
          {socials.map((social) => (
            <li
              key={social.label}
              className="text-dove-gray leading-5 pt-1.5 pb-1.5 flex gap-2 items-center"
            >
              <img src={"/assets" + social.icon} alt={social.label} />
              {social.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Logo */}
      <div className="justify-self-end cursor-pointer hidden lg:block">
        <img src="/assets/vercel.svg" alt="Vercel Logo" />
      </div>

      {/* Status row */}
      <div className="flex gap-1.5 items-center text-sm mt-8 col-span-full">
        <span className="bg-[#0070f3] rounded-full w-2 h-2 inline-block"></span>
        <p>All systems normal</p>
      </div>
    </footer>
  );
};

export default Footer;