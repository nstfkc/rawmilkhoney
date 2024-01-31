import { LuCode2, LuPaintbrush, LuUsers } from "react-icons/lu";

export const Solutions = () => {
  return (
    <div className="flex flex-col gap-16">
      <div>
        <div className="text-2xl font-semibold text-center">What we offer</div>
        <div className="text-center">
          10+ years of web development experience
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 justify-center">
        <div className="col-span-3 md:col-span-1 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-xl font-semibold">
            <LuPaintbrush className="text-orange-600" />
            <span>UI Design</span>
          </div>
          <div className="leading-loose">
            Bibendum ut tristique et, egestas quis ipsum suspendisse ultrices
            gravida dictum fusce ut placerat orci nulla pellentesque dignissim
            enim, sit amet. Arcu dui vivamus arcu felis, bibendum ut tristique
            et.
          </div>
        </div>

        <div className="col-span-3 md:col-span-1 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-xl font-semibold">
            <LuCode2 className="text-green-600" />
            <span>Development and UX</span>
          </div>

          <div className="leading-loose">
            Fusce id velit ut tortor pretium viverra suspendisse potenti nullam
            ac tortor vitae purus faucibus ornare suspendisse sed nisi. Ornare
            arcu odio ut sem nulla pharetra diam sit amet nisl.
          </div>
        </div>

        <div className="col-span-3 md:col-span-1 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-xl font-semibold">
            <LuUsers className="text-indigo-400" />
            <span>Consultation</span>
          </div>

          <div className="leading-loose">
            Eget sit amet tellus cras adipiscing enim eu turpis? Urna duis
            convallis convallis tellus, id interdum velit laoreet id donec
            ultrices tincidunt arcu, non sodales neque sodales ut etiam sit?
          </div>
        </div>
      </div>
    </div>
  );
};
