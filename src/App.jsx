import Header from "./components/header.jsx";
import Line from "./assets/images/Vector 3.png"
import Chains from "./assets/images/Group 2.png"
import Shadow from "./assets/images/Group 3.png"
import url from "./assets/images/urls.png"
import analytics from "./assets/images/analytics.png"
import qrcode from "./assets/images/qrcode.png"
import shorten from "./assets/images/shorten.png"
import vertical from "./assets/images/Line 70.png"
import { Minus, Plus, CircleCheck } from "lucide-react";
import axios from "axios";
import { useState, useEffect } from "react";


function App() {

  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFAQs = async () => {
    try {
      const res = await axios.get ("https://68a109fc6f8c17b8f5d909a3.mockapi.io/api/ScissorsFAQ/faqs")
      setFaqs(res.data)
      
    } catch (error) {
      setError(error);
      
    } finally {
      setLoading(false);
    }
    
  };

   useEffect(() => {
    fetchFAQs(); // auto-fetch on mount
  }, []);

  if (loading) return <p>Loading FAQs...</p>;
  if (error) return <p>Error: {error.message}</p>;




  return (
    <>
      <div className="">
        <Header />
        <main className="my-5">
          <section id="urls" className="relative top-20 my-6 p-4 mx-auto">
            <h1 className="text-3xl font-bold text-center">
              Optimize Your Online Experience With Our Advanced &nbsp;
              <span className="text-blue-600 inline-flex flex-col" id="shortening">
                URL Shortening <img className="w-[150px]" src={Line} alt="" />
              </span> Solution
            </h1>
            <p className="w-[300px] flex mx-auto text-sm tracking-wide text-center my-4 ">
              Personalize your shortened URLs to align with your brand identity.
              Utilize custom slugs, branded links, and domain customization
              options to reinforce your brand presence and enhance users
              engagement.
            </p>

            <div className=" mx-auto flex items-center justify-center">
              <button id="su" className="text-blue-600 mx-4">Sign Up</button>
              <button className="bg-blue-600 text-white px-6 py-1 mx-4 rounded-2xl">Learn more</button>
            </div>
            <img src={Chains} alt="" className="flex items-center justify-center mx-auto w-2/3" />
            <img src={Shadow} alt=""  className="flex items-center justify-center mx-auto" />

            <div className="flex flex-col items-center justify-center my-4 ">
              <div>
                <h2 className="text-2xl font-bold">
                One Stop. 
                Four<span className="text-blue-600"> Possibilities</span>.
              </h2>
              </div>
              <div className="sub grid grid-cols-2 gap-4 p-4">
                    <div>
                <p>
                  <b>3M</b><br /> Active users
                </p>
              </div>
              <div>
                <p>
                  <b>60M</b> Links & QR codes <br /> created
                </p>
              </div>
              <div>
                <p>
                  <b>1B</b> Clicked and Scanned <br /> connections
                </p>
              </div>
              <div>
                <p>
                  <b>300k</b> App <br />integrations
                </p>
              </div>
              </div>
              </div>
          </section>

          <section id="features" className="p-4 mx-auto my-6">
            <div className=" grid grid-cols-2 gap-4 my-8 p-4">
              <div className="flex gap-2 my-4 max-w-[250px] md:max-w-[500px]">
                
                <div className="wcsimg">
                  <img src={vertical} alt="" className="w-[35px] md:w-[20px] lg:w-[10px] relative top-6" />
                  
                </div>

                <div className="my-4">
                  <h2 className="text-3xl font-bold">
                    Why choose <span className="text-blue-600">Scissors</span>
                  </h2>

                  <p>
                    Scissors is the hub of everything that has to do with your
                    link management. We shorten your URLs, allow you creating
                    custom ones for your personal, business, event usage. Our
                    swift QR code creation, managementand usage tracking with
                    advance analytics for all these second to none.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4 mx-2">
                <div className="my-4 mx-2">
                  <img src={shorten} className="mb-2"/>
                  
                  <h2 className="text-xl font-bold">URL Shortening</h2>
                  <p>
                    Scissor allows you to shorten URLs of your business events.
                    Shorten your URLs at scale, URL redirects.
                  </p>
                </div>
                <div className="my-4 mx-2">
                  <img src={url} alt="" className="mb-2" />
                  <h2 className="text-xl font-bold">Custom URLs</h2>
                  <p>
                    WIth Scissor, you can create custom URLs, with length you
                    want! A solution for socials and businesses
                  </p>
                </div>
                <div className="my-4 mx-2">
                  <img src={qrcode} alt="" className="mb-2" />
                  <h2 className="text-xl font-bold">QR Codes</h2>
                  <p>
                    Generate QR codes to your business, events. Bring your
                    audience and customers to your doorstep with this scan and
                    go solution.
                  </p>
                </div>
                <div className="my-4 mx-2">
                  <img src={analytics} alt="" className="mb-2" />
                  <h2 className="text-xl font-bold">Data Analytics</h2>
                  <p>
                    Receive data on the usage of wither your shortened URL,
                    custom URLs or generated QR codes. Embedded to monitor
                    progress.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="prcing" className="flex flex-col items-center justify-center p-4">
            <div className="flex gap-2 mx-auto items-center justify-center max-w-4xl">
              <div className="md:-mt-12">
                <img src={vertical} alt="" />
              </div>
              <div className="">
                <h2 className="text-3xl font-bold mx-auto text-center">
                  A <span className="text-blue-600">price perfect</span> for your needs.
                </h2>
                <p className="text-center mx-0 w-[280px] leading-normal mt-2 mb-4">
                  From catering for your personal, business, event, social
                  needs, you can be rest assured we have you in mind in our
                  pricing.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center flex-col">
              <div className=" flex flex-col lg:grid lg:grid-cols-3">
                <div className="border-2 border-blue-500 bg-white rounded-3xl px-7 py-4 h-[300px] w-[250px] flex flex-col text-left my-4 transition-opacity lg:relative lg:left-4 ">
                  <p>Basic</p>
                  <h3 className="font-bold text-2xl">Free</h3>
                  <p>Free plans for all users</p>
                  <div className="mb-10 my-4">
                    <span className="flex flex-row gap-1 my-4">
                      <CircleCheck size={15}/>
                      <p className="text-lg -mt-1.5">Unlimited URL Shortening </p>   
                    </span>
                    
                    <span className="flex flex-row gap-1 my-4">
                      <CircleCheck size={15}/>
                      <p className="text-lg -mt-1.5">Basic Link Analytics </p>                   
                    </span>
                    
                    <span className="flex flex-row gap-1 my-4">
                      <CircleCheck size={15}/>
                      <p className="text-lg -mt-1.5"> Customizable Short Links</p>                      
                    </span>
                    
                    <span className="flex flex-row gap-1 my-4"><CircleCheck size={15}/>
                    <p className="text-lg -mt-1.5">Standard Support </p>
                    </span>
                    
                    <span className="flex flex-row gap-1 my-4"><CircleCheck size={15}/>
                    <p className="text-lg -mt-1.5"> Ad-supported</p>
                      </span>
                    </div>
    
                </div>

                <div className="bg-blue-950 text-white rounded-3xl py-20 px-7 h-[400px] w-[250px] flex flex-col text-left my-4 gap-2 z-10 lg:relative lg:bottom-15">
                  <p>Professional</p>
                  <h3 className="text-2xl font-bold">  $15/month</h3>
                  <p>Ideal for business creators</p>
                  <div className=" mb-10 my-5">
                    <span className="flex flex-row gap-1 my-4"><CircleCheck size={15}/>
                      <p className="text-lg -mt-1.5"> Enhanced Link Analytics</p></span>
                    <span className="flex flex-row gap-1 my-4"><CircleCheck size={15}/>
                      <p className="text-lg -mt-1.5">Custom Branded Domains </p></span>
                    <span className="flex flex-row gap-1 my-4"><CircleCheck size={15}/>
                      <p className="text-lg -mt-1.5">Advanced Links Customization </p></span>
                    <span className="flex flex-row gap-1 my-4"><CircleCheck size={15}/>
                      <p className="text-lg -mt-1.5"> Priority Support</p></span>
                    <span className="flex flex-row gap-1 my-4"><CircleCheck size={15}/>
                      <p className="text-lg -mt-1.5"> Ad-free Experience</p></span>
                  </div>

                  
                </div>


                <div className="border-2 border-blue-500 bg-white rounded-3xl px-7 py-4 h-[300px] w-[250px] flex flex-col text-left my-4 lg:relative lg:right-4 ">
                  <p>Teams</p>               
                  <h3 className="text-2xl font-bold"> $25/month</h3>
                  <p>Ideal for business creators</p>
                  <div className=" mb-10 my-5">
                    <span className="flex flex-row gap-1 my-4"><CircleCheck size={15}/>
                      <p className="text-lg -mt-1.5"> Team Collaboration </p></span>
                    <span className="flex flex-row gap-1 my-4"><CircleCheck size={15}/>
                      <p className="text-lg -mt-1.5">User Roles and Permission </p></span>
                    <span className="flex flex-row gap-1 my-4"><CircleCheck size={15}/>
                      <p className="text-lg -mt-1.5"> Enhanced Security</p></span>
                    <span className="flex flex-row gap-1 my-4"><CircleCheck size={15}/>
                      <p className="text-lg -mt-1.5">API Access </p></span>
                    <span className="flex flex-row gap-1 my-4"><CircleCheck size={15}/>
                      <p className="text-lg -mt-1.5"> Dedicated Account Manager</p></span>
                  </div>
                  
                </div>
              </div>
              <button>Get Custom Pricing</button>
              <button>Select Pricing</button>
            </div>
          </section>

          <section id="analytics" className="gap-4 flex flex-col items-center justify-center bg-blue-950 m-0 w-[100%] h-[400px] my-6 ">
            <form action="" className="max-w-[400px] bg-white py-4 rounded-3xl px-8">
              <div className="w-full my-5">
                <input type="text" id="purl" placeholder="Paste URL here.." className="border border-blue-500 rounded-xl px-6 py-2 w-full" />
              </div>
              <div className="inline-flex gap-5">
                <select name="" id="" className="w-[50%] border border-blue-500 rounded-xl px-6 py-2">
                  <option value="">Choose Domain</option>
                  <option value="free">Free</option>
                  <option value="pro">Professional</option>
                  <option value="teams">Teams</option>
                </select>
                <input type="text" id="alias" placeholder="Type Alias here" className="w-[50%] border border-blue-500 rounded-xl px-6 py-2 ml-4" />
              </div>
                <button className="bg-blue-600 w-full px-6 py-3 rounded-xl my-5 text-white"> Trim URL</button>
              <p className="w-[90%] text-blue-600 text-center mx-auto">
                By clicking TrimURL, I agree to the
                <a href="">Terms of Service, Privacy Policy</a> and Use of
                Cookies.
              </p>            
            </form>
          </section>


          <section id="faqs" className="flex flex-col mx-auto p-4">
            <div className="faqheading">
              <h1>FAQs</h1>
            </div>
            <div className="flex flex-col items-start gap-4 justify-center mx-auto w-[50%]">

                {faqs.map((faqs) => (
                  <div className="border-b-1 border-black py-2 px-4">
                  <details key={faqs.id}>
                    <summary className="m-2 font-bold">{faqs.question}</summary>
                    {faqs.answer}
                  </details>
                  </div>
                ))
                }

              </div>


        
          </section>
        </main>

        <footer className="gap-4 flex flex-col items-center justify-center bg-blue-950 m-0 w-[100%] h-[400px] my-6 ">
          <section id="revo" className="">
            <div className="revo">
              <h1 className="text-3xl mb-4 p-4 text-white">Revolutionizing Link Optimization</h1>
              <button className="my-4 px-8 py-4 bg-blue-500 text-white rounded-4xl mx-auto flex items-center justify-center">Get Started</button>
            </div>
          </section>
        </footer>
      </div>
    </>
  );
}

export default App;
