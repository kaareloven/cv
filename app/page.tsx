import FlickeringGrid from '@/components/magicui/flickering-grid';
import Particles from '@/components/magicui/particles';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import profilePic from '/public/profile.jpeg';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  return (
    <main>
      <div className="relative h-screen w-screen overflow-hidden">
        <Particles color="#000000" quantity={300} />
        <div className="absolute inset-0">
          <div className="flex w-auto h-auto m-5 justify-between">
            <h1 className="flex text-2xl ml-2">
              Kåre Loven - <span className="italic">Curriculum Vitae</span>
            </h1>
            <div className="flex gap-4">
              <Button variant={'outline'}>
                <span className="flex text-2xl">🇬🇧</span>
              </Button>
              <Button variant={'outline'}>
                <span className="flex text-2xl">🇳🇴</span>
              </Button>
            </div>
          </div>
          <div className="flex flex-row h-auto items-center lg:mt-48">
            <div className="basis-1/2 flex flex-col p-10">
              <h1 className="text-8xl mb-6">Heisann 👋</h1>
              <p className="text-3xl leading-relaxed text-gray-700 text-wrap">
                Kåre Loven her, en hardtarbeidende og sosial student på jakt
                etter nye og spennende erfaringer.
              </p>
            </div>
            <div className="basis-1/2 flex justify-center items-center">
              <Image
                src={profilePic}
                alt="Picture of the author"
                width={250}
                height={250}
                className="rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 p-10 bg-gray-100 rounded-t-3xl">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>💼 Arbeidserfaring</CardTitle>
            <CardDescription>Tidligere arbeidsforhold</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <div className="flex items-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="20"
                    viewBox="0 0 136.655 28.766"
                  >
                    <g transform="translate(-716.591 -471.473)">
                      <path
                        d="M46.624,24.68a16.473,16.473,0,0,1,.579-4.473A9.526,9.526,0,0,1,48.97,16.7a8.328,8.328,0,0,1,2.975-2.282,11.01,11.01,0,0,1,8.4,0A8.225,8.225,0,0,1,63.3,16.7a9.738,9.738,0,0,1,1.762,3.509,16.225,16.225,0,0,1,.588,4.473,16.056,16.056,0,0,1-.588,4.484A9.862,9.862,0,0,1,63.3,32.652a8.15,8.15,0,0,1-2.969,2.292,10.991,10.991,0,0,1-8.388,0,8.273,8.273,0,0,1-2.975-2.292A9.643,9.643,0,0,1,47.2,29.163a16.3,16.3,0,0,1-.579-4.484m3.956,3.287a4.266,4.266,0,0,0,.455,1.967,4.706,4.706,0,0,0,1.205,1.511A5.685,5.685,0,0,0,54,32.419a6.6,6.6,0,0,0,4.273,0,5.687,5.687,0,0,0,1.761-.974,4.706,4.706,0,0,0,1.205-1.511,4.267,4.267,0,0,0,.456-1.967V21.394a4.27,4.27,0,0,0-.456-1.968A4.831,4.831,0,0,0,60.036,17.9a5.582,5.582,0,0,0-1.761-.984,6.385,6.385,0,0,0-2.126-.355,6.467,6.467,0,0,0-2.136.355,5.562,5.562,0,0,0-1.772.984,4.831,4.831,0,0,0-1.205,1.522,4.27,4.27,0,0,0-.455,1.968Z"
                        transform="translate(692.526 464.462)"
                        fill="CurrentColor"
                      ></path>
                      <path
                        d="M101.6,17.858h6.449V14.631H101.6ZM97.86,35.809H101.6V17.859H97.86Z"
                        transform="translate(666.079 463.921)"
                        fill="CurrentColor"
                      ></path>
                      <rect
                        width="3.73"
                        height="17.95"
                        transform="translate(716.591 481.813)"
                        fill="CurrentColor"
                      ></rect>
                      <path
                        d="M20.919,14.7V35.879H17.183V17.929H7.71V14.7Z"
                        transform="translate(712.612 463.884)"
                        fill="CurrentColor"
                      ></path>
                      <path
                        d="M128.509,28.258V0h3.733V10.528A7.272,7.272,0,0,1,134.919,7.6a7.746,7.746,0,0,1,4.1-1.024,7.534,7.534,0,0,1,3.692.872,7.726,7.726,0,0,1,2.627,2.364,10.651,10.651,0,0,1,1.562,3.53,17.55,17.55,0,0,1,.517,4.331,17.355,17.355,0,0,1-.517,4.341,10.791,10.791,0,0,1-1.562,3.51,7.712,7.712,0,0,1-2.617,2.373,7.505,7.505,0,0,1-3.7.872,7.745,7.745,0,0,1-4.1-1.024,7.265,7.265,0,0,1-2.678-2.932v3.449Zm3.733-8.8a6.785,6.785,0,0,0,1.5,4.524,5.327,5.327,0,0,0,4.321,1.785,5.666,5.666,0,0,0,3.885-1.329,4.41,4.41,0,0,0,1.512-3.479V14.383a4.441,4.441,0,0,0-1.512-3.489,5.64,5.64,0,0,0-3.885-1.339,5.313,5.313,0,0,0-4.321,1.8,6.825,6.825,0,0,0-1.5,4.534Z"
                        transform="translate(650.259 471.473)"
                        fill="CurrentColor"
                      ></path>
                      <path
                        d="M179.41,0H183.3V3.915H179.41Zm.081,7.08h3.733V28.258h-3.733Z"
                        transform="translate(623.986 471.473)"
                        fill="CurrentColor"
                      ></path>
                      <path
                        d="M197.438,10.264V7.08h3.53V0H204.7V7.08h4.828v3.185H204.7V25.053h4.828v3.205h-8.56V10.264Z"
                        transform="translate(614.68 471.473)"
                        fill="CurrentColor"
                      ></path>
                      <path
                        d="M245.754,25.451a9.513,9.513,0,0,0-4.7-2.143l-3.571-.745a4.527,4.527,0,0,1-2.284-1.026,2.6,2.6,0,0,1-.706-1.945,2.566,2.566,0,0,1,1.2-2.192,5.075,5.075,0,0,1,2.951-.837,4.96,4.96,0,0,1,2.932.861A3.569,3.569,0,0,1,242.89,20.4h3.73a6.837,6.837,0,0,0-.721-3.072,6.1,6.1,0,0,0-1.8-2.119,7.724,7.724,0,0,0-2.555-1.229,9.741,9.741,0,0,0-2.932-.4,7.806,7.806,0,0,0-2.632.479l-.082.029V17.27h-4.5a5.22,5.22,0,0,0-.552,2.337,5.489,5.489,0,0,0,1.408,3.963,7.547,7.547,0,0,0,4.03,2.018l3.488.711a6.168,6.168,0,0,1,2.961,1.176,2.862,2.862,0,0,1-.547,4.466,6.2,6.2,0,0,1-3.247.832,5.571,5.571,0,0,1-3.377-1.045,3.851,3.851,0,0,1-1.51-3.155H230.31a7.332,7.332,0,0,0,.711,3.135,6.377,6.377,0,0,0,1.829,2.25,8.153,8.153,0,0,0,2.71,1.36,11.737,11.737,0,0,0,3.334.455,10.824,10.824,0,0,0,3.406-.508,9.473,9.473,0,0,0,2.666-1.326,5.665,5.665,0,0,0,1.727-1.969,5.314,5.314,0,0,0,.6-2.487,5.33,5.33,0,0,0-1.534-4.03"
                        transform="translate(597.713 464.466)"
                        fill="CurrentColor"
                      ></path>
                      <path
                        d="M3.448-62.344v-.724H6.6v.724H5.43v3.188H4.621v-3.188Zm3.923,3.188v-3.912H8.624l.921,2.739.921-2.739h1.229v3.912h-.808v-2.829L9.9-59.156H9.151l-.977-2.829v2.829Z"
                        transform="translate(841.552 534.541)"
                        fill="CurrentColor"
                      ></path>
                    </g>
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold">Norbits</h3>
                    <p className="text-sm text-gray-600">Utvikler</p>
                    <p className="text-sm text-gray-600">
                      Sommerjobb 2023 & 2024
                    </p>
                  </div>
                </div>
                <Button variant="outline">Les mer</Button>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>🎓 Utdanning</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>🎖️ Annet</CardTitle>
            <CardDescription>Frivillighet og studentverv</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
