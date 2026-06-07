import MainLayout from "../../layouts/MainLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Instagram,Linkedin,EnvelopeOpen, Line} from 'react-bootstrap-icons';


function Home() {


  return (
    <MainLayout>
      <section className="w-full px-[12px] pb-[24px] flex gap-[24px] overflow-hidden relative bg-[#FDF7F1] xs:justify-center xs:h-[800px]">
        <div className="max-w-[1296px] flex flex-col flex-col-reverse gap-[24px] items-center xs:flex-row xs:h-full">
          <div className="max-w-[526px] max-h-[376px]">
            <h1 className="text-[40px] font-bold tracking-[2%] mb-[12px] leading-[120%] xs:mb-[24px] xs:text-[80px]">Hello <br className="xs:hidden"/>I'm Nelson</h1>
            <p className="text-[14px] tracking-[2%] leading-[150%] mb-[32px] xs:mb-[60px] xs:text-[16px]">我是一個擁有 10 年經驗的 UIUX 設計師 和 前端工程師<br/>喜歡把美學和程式結合，打造一個又一個精美的網頁設計！</p>
            <div className="flex gap-[12px] xs:gap-[24px]">
              <button className="text-[14px] xs:text-[16px] bg-[#404040] rounded-[999px] text-[#FFFFFF] py-[12px] px-[20px] xs:px-[24px]">與我聯絡</button>
              <button className="text-[14px] xs:text-[16px] rounded-[999px] border border-[#404040] py-[12px] px-[20px] xs:px-[24px]">我的履歷</button>
            </div>
          </div>
          <div className="max-w-[746px] h-[auto]">
            <img className="w-full h-auto" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/index_person.png?raw=true" alt="" />
          </div>
        </div>
         <img className="absolute top-[414px] left-[249px] w-[80px] h-[80px] xs:w-[auto] xs:h-[auto] xs:left-[86px] xs:top-[56px]" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/index_decora_3.png?raw=true"/>
      <img className="hidden absolute top-[120px] left-[225px] xs:block" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/index_decora_4.png?raw=true" alt="" />
      <img className="hidden absolute right-[142px] top-[206px] xs:block" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/index_decora_3.png?raw=true"/>
      <img className="floating-image absolute top-[26px] left-[-15px] w-[80px] h-[79px] xs:left-[781px] xs:top-[97px] xs:w-[auto] xs:h-[auto]" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/index_decora_1.png?raw=true"/>
      <img className="floating-image absolute top-[274px] right-[-13px] xs:right-[232px] xs:top-[576px] w-[80px] h-[69px]" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/index_decora_2.png?raw=true"/>
      <img className="absolute top-[398.41px] left-[134.5px] xs:hidden" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/index_decora_6.png?raw=true"/>
      </section>
      {/* {Service} */}
      <section className="h-[306px] bg-[#24140B] py-[40px] px-[12px] sm:py-[80px] sm:h-auto sm:flex sm:w-full sm:flex-col sm:items-center">
     
            <div className="border border-[1px] w-full max-w-[1296px] mb-[24px] text-[#FFFFFF] font-bold tracking-[2%]">
              <h5 className="text-[14px] leading-[150%] sm:text-[16px]">服務項目</h5>
              <h2 className="text-[40px] leading-[120%] sm:text-[80px]">SERVICES</h2>
            </div>
            {/* {Mobile} */}
            <Swiper className="w-full sm:hidden cursor-grabbing" spaceBetween={12} slidesPerView={"auto"}>
              <SwiperSlide className="!w-[260px]">
                <div className="text-[#404040] shrink-0 bg-[#FDF7F1] p-[12px] flex flex-col gap-[8px] w-[260px]">
                  <div className="flex justify-between">
                    <div>
                      <h5 className="leading-[150%] text-[14px]">GRAPHIC</h5>
                      <h3 className="leading-[150%] text-[24px]">平面設計</h3>
                    </div>
                    <div><span className="material-symbols-outlined">format_color_fill</span></div>
                  </div>
                  <div className="flex justify-content gap-[8px]">
                    <p>從品牌識別到視覺傳達，用專業設計精準傳遞核心價值</p> 
                    <button className="w-[44px] h-[44px] rounded-[50%] shrink-0 bg-[#404040] text-[#FFFFFF]"><span className="material-symbols-outlined">arrow_outward</span></button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="!w-[260px]">
                <div className="text-[#404040] shrink-0 bg-[#FDF7F1] p-[12px] flex flex-col gap-[8px] w-[260px]">
                  <div className="flex justify-between">
                    <div>
                      <h5 className="leading-[150%] text-[14px]">WEBSITE</h5>
                      <h3 className="leading-[150%] text-[24px]">網頁設計</h3>
                    </div>
                    <div><span className="material-symbols-outlined">format_color_fill</span></div>
                  </div>
                  <div className="flex justify-content gap-[8px]">
                    <p>美感易用並重，以 Figma 打造符合直覺的數位體驗</p> 
                    <button className="w-[44px] h-[44px] rounded-[50%] shrink-0 bg-[#404040] text-[#FFFFFF]"><span className="material-symbols-outlined">arrow_outward</span></button>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="!w-[260px]">
                <div className="text-[#404040] shrink-0 bg-[#FDF7F1] p-[12px] flex flex-col gap-[8px] w-[260px]">
                  <div className="flex justify-between">
                    <div>
                      <h5 className="leading-[150%] text-[14px]">FRONTEND</h5>
                      <h3 className="leading-[150%] text-[24px]">前端切版</h3>
                    </div>
                    <div><span className="material-symbols-outlined">format_color_fill</span></div>
                  </div>
                  <div className="flex justify-content gap-[8px]">
                    <p>精準轉譯設計稿細節，建構流暢穩定 RWD 響應式網頁</p> 
                    <button className="w-[44px] h-[44px] rounded-[50%] shrink-0 bg-[#404040] text-[#FFFFFF]"><span className="material-symbols-outlined">arrow_outward</span></button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-[260px]">
                <div className="text-[#404040] shrink-0 bg-[#FDF7F1] p-[12px] flex flex-col gap-[8px] w-[260px]">
                  <div className="flex justify-between">
                    <div>
                      <h5 className="leading-[150%] text-[14px]">BACKEND</h5>
                      <h3 className="leading-[150%] text-[24px]">後端開發</h3>
                    </div>
                    <div><span className="material-symbols-outlined">format_color_fill</span></div>
                  </div>
                  <div className="flex justify-content gap-[8px]">
                    <p>佈署穩定系統架構，串接 API 並確保數據處理安全</p> 
                    <button className="w-[44px] h-[44px] rounded-[50%] shrink-0 bg-[#404040] text-[#FFFFFF]"><span className="material-symbols-outlined">arrow_outward</span></button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            {/* {Desktop} */}
            <div className="hidden sm:flex sm:flex-wrap gap-[24px] max-w-[1296px]">
                <div className="sm:w-1/2 lg:w-1/4 text-[#404040] bg-[#FDF7F1] p-[12px] flex flex-col gap-[8px] max-w-[306px]">
                  <div className="flex justify-between">
                    <div>
                      <h5 className="leading-[150%] text-[14px]">GRAPHIC</h5>
                      <h3 className="leading-[150%] text-[24px]">平面設計</h3>
                    </div>
                    <div><span className="material-symbols-outlined">format_color_fill</span></div>
                  </div>
                  <div className="flex justify-content gap-[8px]">
                    <p>從品牌識別到視覺傳達，用專業設計精準傳遞核心價值</p> 
                    <button className="w-[44px] h-[44px] rounded-[50%] shrink-0 bg-[#404040] text-[#FFFFFF]"><span className="material-symbols-outlined">arrow_outward</span></button>
                  </div>
                </div>
                <div className="sm:w-1/2 lg:w-1/4 text-[#404040] bg-[#FDF7F1] p-[12px] flex flex-col gap-[8px] max-w-[306px]">
                  <div className="flex justify-between">
                    <div>
                      <h5 className="leading-[150%] text-[14px]">WEBSITE</h5>
                      <h3 className="leading-[150%] text-[24px]">網頁設計</h3>
                    </div>
                    <div><span className="material-symbols-outlined">format_color_fill</span></div>
                  </div>
                  <div className="flex justify-content gap-[8px]">
                    <p>美感易用並重，以 Figma 打造符合直覺的數位體驗</p> 
                    <button className="w-[44px] h-[44px] rounded-[50%] shrink-0 bg-[#404040] text-[#FFFFFF]"><span className="material-symbols-outlined">arrow_outward</span></button>
                  </div>
                </div>
                <div className="sm:w-1/2 lg:w-1/4 text-[#404040] bg-[#FDF7F1] p-[12px] flex flex-col gap-[8px] max-w-[306px]">
                  <div className="flex justify-between">
                    <div>
                      <h5 className="leading-[150%] text-[14px]">FRONTEND</h5>
                      <h3 className="leading-[150%] text-[24px]">前端切版</h3>
                    </div>
                    <div><span className="material-symbols-outlined">format_color_fill</span></div>
                  </div>
                  <div className="flex justify-content gap-[8px]">
                    <p>精準轉譯設計稿細節，建構流暢穩定 RWD 響應式網頁</p> 
                    <button className="w-[44px] h-[44px] rounded-[50%] shrink-0 bg-[#404040] text-[#FFFFFF]"><span className="material-symbols-outlined">arrow_outward</span></button>
                  </div>
                </div>
                <div className="sm:w-1/2 lg:w-1/4 text-[#404040] bg-[#FDF7F1] p-[12px] flex flex-col gap-[8px] max-w-[306px]">
                  <div className="flex justify-between">
                    <div>
                      <h5 className="leading-[150%] text-[14px]">BACKEND</h5>
                      <h3 className="leading-[150%] text-[24px]">後端開發</h3>
                    </div>
                    <div><span className="material-symbols-outlined">format_color_fill</span></div>
                  </div>
                  <div className="flex justify-content gap-[8px]">
                    <p>佈署穩定系統架構，串接 API 並確保數據處理安全</p> 
                    <button className="w-[44px] h-[44px] rounded-[50%] shrink-0 bg-[#404040] text-[#FFFFFF]"><span className="material-symbols-outlined">arrow_outward</span></button>
                  </div>
                </div>
            </div>
      </section>
      {/* {Project} */}
      <section className="w-full py-[40px] px-[12px] bg-[#FDF7F1] xs:py-[80px] xs:px-[40px]">
          <div className="mb-[24px] text-center">
              <h5 className="text-[14px] leading-[150%] sm:text-[16px]">專案作品</h5>
              <h2 className="text-[40px] leading-[120%] sm:text-[80px]">PROJECT</h2>
          </div>
          <div className="flex flex-col items-center gap-[12px] xs:gap-[24px]">
            <div className="w-full h-[580px] max-w-[351px] bg-cover flex items-end p-[16px] text-center  bg-[url('https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/mobile/project_1.png?raw=true')] xs:bg-[url('https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/project_1.png?raw=true')] xs:max-w-[1296px] xs:h-auto xs:p-[28px]">
                <div className="bg-[#FDF7F1] flex flex-col max-w-[319px] gap-[12px] p-[24px] xs:max-w-[386px] xs:p-[40px]">
                    <p className="text-[14px]">Oct 16, 2025</p>
                    <div className="text-[14px] xs:text-[16px]">
                      <span>平面設計</span>
                      <span>·</span>
                      <span>網頁設計</span>
                    </div>
                    <h4 className="leading-[150%] tracking-[2%] font-bold text-[20px] xs:text-[24px]">品牌視覺與電商整合，多肉植物品牌電商建置</h4>
                    <p className="leading-[150%] tracking-[2%] text-[14px] xs:text-[16px]">從品牌識別設計到 RWD 網站開發，打造療癒系植栽購物體驗</p>
                    <div>
                      <button className="text-[14px] leading-[150%] tracking-[2%] xs:text-[16px] bg-[#404040] rounded-[999px] text-[#FFFFFF] py-[12px] px-[20px] xs:px-[24px]">前往專案</button>  
                    </div>
                </div>
            </div>
            <div className="w-full h-[580px] max-w-[351px] bg-cover flex items-end p-[16px] text-center  bg-[url('https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/mobile/project_2.png?raw=true')] xs:bg-[url('https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/project_2.png?raw=true')] xs:max-w-[1296px] xs:h-auto xs:p-[28px]">
                <div className="bg-[#FDF7F1] flex flex-col max-w-[319px] gap-[12px] p-[24px] xs:max-w-[386px] xs:p-[40px]">
                    <p className="text-[14px]">Oct 16, 2025</p>
                    <div className="text-[14px] xs:text-[16px]">
                      <span>平面設計</span>
                      <span>·</span>
                      <span>網頁設計</span>
                      <span>·</span>
                      <span>前端切版</span>
                    </div>
                    <h4 className="leading-[150%] tracking-[2%] font-bold text-[20px] xs:text-[24px]">數位產品 UI/UX 設計，個人化財務視覺化軟體</h4>
                    <p className="leading-[150%] tracking-[2%] text-[14px] xs:text-[16px]">運用數據視覺化邏輯，將複雜的財務數據轉化為直覺的操作介面</p>
                    <div>
                      <button className="text-[14px] leading-[150%] tracking-[2%] xs:text-[16px] bg-[#404040] rounded-[999px] text-[#FFFFFF] py-[12px] px-[20px] xs:px-[24px]">前往專案</button>  
                    </div>
                </div>
            </div>
            <div className="w-full h-[580px] max-w-[351px] bg-cover flex items-end p-[16px] text-center  bg-[url('https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/mobile/project_3.png?raw=true')] xs:bg-[url('https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/project_3.png?raw=true')] xs:max-w-[1296px] xs:h-auto xs:p-[28px]">
                <div className="bg-[#FDF7F1] flex flex-col max-w-[319px] gap-[12px] p-[24px] xs:max-w-[386px] xs:p-[40px]">
                    <p className="text-[14px]">Oct 16, 2025</p>
                    <div className="text-[14px] xs:text-[16px]">
                      <span>前端切版</span>
                      <span>·</span>
                      <span>後端開發</span>
                    </div>
                    <h4 className="leading-[150%] tracking-[2%] font-bold text-[20px] xs:text-[24px]">品牌識別與包裝設計，法式甜點品牌視覺重塑</h4>
                    <p className="leading-[150%] tracking-[2%] text-[14px] xs:text-[16px]">以溫暖、輕盈的視覺語言，精準定位高質感甜點市場的品牌形象</p>
                    <div>
                      <button className="text-[14px] leading-[150%] tracking-[2%] xs:text-[16px] bg-[#404040] rounded-[999px] text-[#FFFFFF] py-[12px] px-[20px] xs:px-[24px]">前往專案</button>  
                    </div>
                </div>
              </div>
          </div>
          <div className="flex justify-center mt-[24px] xs:mt-[40px]">
            <button className="text-[14px] leading-[150%] tracking-[2%] xs:text-[16px] bg-[#404040] rounded-[999px] text-[#FFFFFF] py-[12px] px-[20px] xs:px-[24px]">探索更多</button>  
          </div>
      </section>
      {/* {Blog} */}
      <section className="w-full flex flex-col items-center py-[40px] px-[12px] bg-[#FDF7F1] sm:py-[80px] sm:px-[40px] gap-[24px]">
        <div className="w-full flex justify-between max-w-[1296px]">
            <div className="mb-[24px]">
                <h5 className="text-[14px] leading-[150%] sm:text-[16px]">部落格</h5>
                <h2 className="text-[40px] leading-[120%] sm:text-[80px]">BLOGS</h2>
            </div>     
            <div>
              <button className="text-[14px] leading-[150%] tracking-[2%] sm:text-[16px] border border-[1px] border-[#404040] rounded-[999px] text-[#404040] py-[12px] px-[20px] sm:px-[24px]">探索更多</button>  
            </div>
        </div>
        {/* {Blog card-Mobile} */}
          <Swiper className="w-full sm:hidden cursor-grabbing" spaceBetween={12} slidesPerView={"auto"}>
              <SwiperSlide className="!w-[260px]">
                <div className="text-[#404040] shrink-0 bg-[#FDF7F1] flex flex-col gap-[8px] w-full">
                    <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/blog_2.png?raw=true" alt="" />
                    <div className="text-[14px] xs:text-[16px]">
                      <span>UIUX 設計</span>
                      <span>·</span>
                      <span>設計規範</span>
                      <span>·</span>
                      <span>前端技術</span>
                    </div>
                    <h4 className="leading-[150%] tracking-[2%] font-bold text-[20px] xs:text-[24px]">10年職人手記：如何運用 Figma 與 Storybook 打造美感與邏輯兼具的企業級設計系統</h4>
                    {/* {Date and Performance} */}
                    <div className="flex justify-between text-[13px] items-center">
                        <p>Oct 16, 2025</p>
                        <div className="flex gap-[8px]">
                            <p>
                              <span className="material-symbols-outlined align-middle">visibility</span>
                              110 views
                            </p>
                            <p>
                              <span className="material-symbols-outlined align-middle">share</span>
                              2 shares
                            </p>
                        </div>
                    </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-[260px]">
                <div className="text-[#404040] shrink-0 bg-[#FDF7F1] flex flex-col gap-[8px] w-full">
                    <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/blog_3.png?raw=true" alt="" />
                    <div className="text-[14px] xs:text-[16px]">
                      <span>品牌設計</span>
                      <span>·</span>
                      <span>平面設計</span>
                      <span>·</span>
                      <span>UIUX 設計</span>
                    </div>
                    <h4 className="leading-[150%] tracking-[2%] font-bold text-[20px] xs:text-[24px]">從平面識別到數位體驗：以「植感生活」為例，探討跨媒體品牌視覺在網頁上的精準轉譯</h4>
                    {/* {Date and Performance} */}
                    <div className="flex justify-between text-[13px] items-center">
                        <p>Oct 16, 2025</p>
                        <div className="flex gap-[8px]">
                            <p>
                              <span className="material-symbols-outlined align-middle">visibility</span>
                              110 views
                            </p>
                            <p>
                              <span className="material-symbols-outlined align-middle">share</span>
                              2 shares
                            </p>
                        </div>
                    </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="!w-[260px]">
                <div className="text-[#404040] shrink-0 bg-[#FDF7F1] flex flex-col gap-[8px] w-full">
                    <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/blog_5.png?raw=true" alt="" />
                    <div className="text-[14px] xs:text-[16px]">
                      <span>前端技術</span>
                      <span>·</span>
                      <span>後段架構</span>
                      <span>·</span>
                      <span>AI 趨勢應用</span>
                    </div>
                    <h4 className="leading-[150%] tracking-[2%] font-bold text-[20px] xs:text-[24px]">揭開金融 App 的設計密碼：如何優化 Open Bank API 的複雜數據呈現與後端串接安全性</h4>
                    {/* {Date and Performance} */}
                    <div className="flex justify-between text-[13px] items-center">
                        <p>Oct 16, 2025</p>
                        <div className="flex gap-[8px]">
                            <p>
                              <span className="material-symbols-outlined align-middle">visibility</span>
                              110 views
                            </p>
                            <p>
                              <span className="material-symbols-outlined align-middle">share</span>
                              2 shares
                            </p>
                        </div>
                    </div>
                </div>
              </SwiperSlide>
          </Swiper>
          {/* {Blog card-Desktop} */}         
          <div className="hidden sm:flex max-w-[1296px] gap-[24px]">
              <div className="text-[#404040] bg-[#FDF7F1] flex flex-col gap-[8px] w-full">
                  <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/blog_2.png?raw=true" alt="" />
                  <div className="text-[14px] sm:text-[16px]">
                    <span>UIUX 設計</span>
                    <span>·</span>
                    <span>設計規範</span>
                    <span>·</span>
                    <span>前端技術</span>
                  </div>
                  <h4 className="leading-[150%] tracking-[2%] font-bold text-[20px] sm:text-[24px]">10年職人手記：如何運用 Figma 與 Storybook 打造美感與邏輯兼具的企業級設計系統</h4>
                  {/* {Date and Performance} */}
                  <div className="flex justify-between text-[14px] items-center">
                      <p>Oct 16, 2025</p>
                      <div className="flex gap-[8px]">
                          <p>
                            <span className="material-symbols-outlined align-middle">visibility</span>
                            110 views
                          </p>
                          <p>
                            <span className="material-symbols-outlined align-middle">share</span>
                            2 shares
                          </p>
                      </div>
                  </div>
              </div>
              <div className="text-[#404040] bg-[#FDF7F1] flex flex-col gap-[8px] w-full">
                  <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/blog_3.png?raw=true" alt="" />
                  <div className="text-[14px] sm:text-[16px]">
                    <span>品牌設計</span>
                    <span>·</span>
                    <span>平面設計</span>
                    <span>·</span>
                    <span>UIUX 設計</span>
                  </div>
                  <h4 className="leading-[150%] tracking-[2%] font-bold text-[20px] sm:text-[24px]">從平面識別到數位體驗：以「植感生活」為例，探討跨媒體品牌視覺在網頁上的精準轉譯</h4>
                  {/* {Date and Performance} */}
                  <div className="flex justify-between text-[14px] items-center">
                      <p>Oct 16, 2025</p>
                      <div className="flex gap-[8px]">
                          <p>
                            <span className="material-symbols-outlined align-middle">visibility</span>
                            110 views
                          </p>
                          <p>
                            <span className="material-symbols-outlined align-middle">share</span>
                            2 shares
                          </p>
                      </div>
                  </div>
              </div>
              <div className="text-[#404040] bg-[#FDF7F1] flex flex-col gap-[8px] w-full">
                  <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/blog_5.png?raw=true" alt="" />
                  <div className="text-[14px] sm:text-[16px]">
                    <span>前端技術</span>
                    <span>·</span>
                    <span>後段架構</span>
                    <span>·</span>
                    <span>AI 趨勢應用</span>
                  </div>
                  <h4 className="leading-[150%] tracking-[2%] font-bold text-[20px] sm:text-[24px]">揭開金融 App 的設計密碼：如何優化 Open Bank API 的複雜數據呈現與後端串接安全性</h4>
                  {/* {Date and Performance} */}
                  <div className="flex justify-between text-[14px] items-center">
                      <p>Oct 16, 2025</p>
                      <div className="flex gap-[8px]">
                          <p>
                            <span className="material-symbols-outlined align-middle">visibility</span>
                            110 views
                          </p>
                          <p>
                            <span className="material-symbols-outlined align-middle">share</span>
                            2 shares
                          </p>
                      </div>
                  </div>
                </div>       
          </div>  
      </section>
      {/* {Subscription} */}
      <section className="w-full bg-[url('https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/mobile/subscription_bg.png?raw=true')] bg-cover md:bg-[url('https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/subscription_bg.png?raw=true')] xs:h-auto">
      <div className="bg-[#00000099] h-full w-full">
        <div className="w-full flex justify-center">
          <div className="flex flex-col max-w-[1296px] md:flex-row md:gap-[24px] md:min-w-0 ">
            <img className="w-full md:w-1/2 object-cover" src="https://github.com/hexschool/2022-web-layout-training/blob/main/2026-web-camp/subscription.png?raw=true" alt="" />
            <div className="min-w-0 text-[#FFFFFF] py-[40px] px-[12px] flex flex-col justify-center md:py-[80px] md:px-[40px]">
                <div className="mb-[12px] min-w-0">
                    <h5 className="text-[14px] leading-[150%] sm:text-[16px]">電子報訂閱</h5>
                    <h2 className="text-[40px] leading-[120%] sm:text-[80px] break-all">SUBSCRIPTION</h2>
                </div>  
                <p className="mb-[24px] leading-[150%] tracking-[2%] text-[14px] xs:text-[16px]">你也在追求設計美感與技術落地的完美平衡嗎？作為資深設計師兼工程師，我深知跨領域協作的痛點。訂閱電子報，我將分享如何利用 AI 工具提升產能！</p>
                <form className="w-full text-[#FFFFFF] flex justify-between rounded-full h-auto p-[8px] " style={{border:"1px solid #FFFFFF"}}>
                  <input className="bg-[transparent] w-full placeholder:text-[#FFFFFF] outline-none" type="text" placeholder="電子信箱"/>
                  <button className="bg-[#FFFFFF] rounded-full shrink-0 py-[12px] px-[20px] text-[#404040] xs:px-[24px] xs:text-[16px]">送出</button>
                </form>
            </div>
          </div>
        </div>
      </div>
      </section>
      {/* {Contact} */}
      <section className="w-full bg-[#24140B] py-[40px] px-[12px] text-[#FFFFFF] xs:flex xs:justify-center xs:py-[80px] xs:px-[40px]">
        <div className="w-full flex flex-col gap-[24px] max-w-[1296px] md:flex-row">
             <div className="w-full flex flex-col xs:justify-between">
                <div>

                  <h5 className="text-[14px] leading-[150%] sm:text-[16px]">與我聯絡</h5>
                  <h2 className="text-[40px] leading-[120%] sm:text-[80px] mb-[12px] break-all">CONTACT</h2>
                  <p className="leading-[150%] tracking-[2%]">若有數位產品設計和開發相關問題</p>
                  <p className="leading-[150%] tracking-[2%]">歡迎填寫表單 或 直接與我聯絡！</p>
                </div>
                <div className="hidden md:flex md:flex-col md:gap-[12px]">
                  <div className="flex gap-[12px]">
                    <div className="rounded-full p-[12px]" style={{border:"1px solid #FFFFFF"}}><Instagram size={20} /></div>
                    <div className="rounded-full p-[12px]" style={{border:"1px solid #FFFFFF"}}><Line size={20} /></div>
                    <div className="rounded-full p-[12px]" style={{border:"1px solid #FFFFFF"}}><Linkedin size={20} /></div>
                  </div>
                  <div className="flex gap-[8px]">
                    <div><EnvelopeOpen size={15} /></div>
                    <p>service@hexschool.com</p>
                  </div>
                </div>  
            </div> 
      
            <div className="flex flex-col gap-[12px] w-full xs:gap-[24px] md:px-[40px]">
              <div className="flex-1 flex flex-col gap-[12px] md:flex-row">
                  <input className="w-full outline-none bg-[transparent] border border-[#FFFFFF] rounded-[32px] p-[8px] placeholder:text-[#FFFFFF] xs:h-[64px]" type="text" placeholder="姓名"/>
                  <input className="w-full outline-none bg-[transparent] border border-[#FFFFFF] rounded-[32px] p-[8px] placeholder:text-[#FFFFFF] xs:h-[64px]" type="text" placeholder="手機號碼"/>
              </div>
              <div className="flex-1">
                <input className="w-full outline-none bg-[transparent] border border-[#FFFFFF] rounded-[32px] p-[8px] placeholder:text-[#FFFFFF] xs:h-[64px]" type="text" placeholder="電子信箱"/>
              </div>
              <div className="flex-1">
                <textarea className="w-full outline-none bg-[transparent] border border-[#FFFFFF] rounded-[32px] placeholder:text-[#FFFFFF] py-[8px] px-[12px] xs:h-[136px]" rows="5" name="備註" id="" placeholder="備註"></textarea>
              </div>
              <div className="flex-1">
                <button className="w-full py-[12px] px-[20px] xs:-[24px] bg-[#FFFFFF] text-[#404040] rounded-full">
                  送出
                </button>
              </div>
            </div>  
            <div className="flex flex-col gap-[12px] md:hidden">
              <div className="flex gap-[12px]">
                <div className="rounded-full p-[12px]" style={{border:"1px solid #FFFFFF"}}><Instagram size={20} /></div>
                <div className="rounded-full p-[12px]" style={{border:"1px solid #FFFFFF"}}><Line size={20} /></div>
                <div className="rounded-full p-[12px]" style={{border:"1px solid #FFFFFF"}}><Linkedin size={20} /></div>
              </div>
              <div className="flex gap-[8px]">
                <div><EnvelopeOpen size={15} /></div>
                <p>service@hexschool.com</p>
              </div>
            </div>        

        </div>

      </section>
     

    </MainLayout>
  );
}

export default Home;