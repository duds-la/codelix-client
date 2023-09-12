import Image from "next/image"
import { type } from "os"

type MovieRowProps = {
  sectionTitle: string
};

const MovieCard = ({
  index
}: {
  index: number
}) => (
  <div key={index} className="group: h-28 min-w-[200px] relative bg-gradient-to-t from-transparent
    transform duration-200 ease-in hover:scale-110 hover:z-50 md:h-40 md:min-w-[300px] lg:h-52 lg:min-w-[400px]
    ">
    <Image
      src={`/item${index}.jpg`}
      fill={true}
      alt='true'
      className='rounded'
    />
  </div>
);

export function MovieRow({ sectionTitle }: MovieRowProps) {

  return (
    <div className="flex-col space-y-4">
      <div className="flex">
        <h2 className='-ml-2 inline-flex items-center text-2xl font-bold'>
          {sectionTitle}
        </h2>
      </div>
      <div className='-ml-8 flex space-x-4 overflow-x-scroll p-6 scrollbar-hide'>
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <MovieCard key={index} index={index} />
        ))}
      </div>
    </div>

  )
}