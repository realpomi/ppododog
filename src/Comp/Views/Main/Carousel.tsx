import { Fragment } from "react"

export const CarouselView = (props:any) => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            
            <div className="carousel-inner" style={{height: 500}}>
                <div className="carousel-item active" style={{height: "100%"}}>
                    <div style={{position: "relative", background: "#CCC", width: "100%", height: "100%"}}>
                        <div style={{position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>
                            <img src="https://sat02pap001files.storage.live.com/y4mc5S_An_dSSLvtXrL711Llsnrg4xoOryxhdyFHxO9X6bSIPLpvdMSiAMCTv9ywGj_Sp6fZ_keHUdw3WuUPoX0r2wwRXg_mWx6EbUEO_ihFOopEn8ibC6NaeLjJFWUCAIa24TaTKr_RVD09SqpO-3JW1ybVHvcd1VoaVUGiB_8yyFI7QjvmNVhWat0vCgZ1xtW?width=1024&height=768&cropmode=none" 
                                    className="d-block" alt="fleeing" 
                                    style={{height: "100%"}}
                                />
                        </div>
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>귀파는 필링이</h5>
                        <p>필링이는 귀를 팔때도 귀엽습니다</p>
                    </div>
                </div>
                <div className="carousel-item" style={{height: "100%"}}>
                    <div style={{position: "relative", background: "#CCC", width: "100%", height: "100%"}}>
                        <div style={{position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>
                            <img src="https://sat02pap001files.storage.live.com/y4m-QJeewtsp5OjaLVfEr4lVrSvr7vY6ai4daiKtwsmzgJ7KWgl6mg5pxjcguKWxROr8JC2i5a2b1LrJXyTUuQGwd5cPx7SvhGsACaVGkkWJH_lLV0OtPf4ahZkfpFQBhQpt9PSbBWohp59VajBEE4WHy7EbBawzQ3AMWGAi_P2CSIPpE5BBP48yjr5UHbx6XI8?width=768&height=1024&cropmode=none" 
                                    className="d-block" alt="ompang" 
                                    style={{height: "100%"}}
                                />
                        </div>
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>하늘을 보는 옴팡이</h5>
                        <p>옴팡이의 꿈은 F-14 파일럿이 되는 것 이었습니다</p>
                    </div>
                </div>
                <div className="carousel-item" style={{height: "100%"}}>
                    <div style={{position: "relative", background: "#CCC", width: "100%", height: "100%"}}>
                        <div style={{position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>
                            <img src="https://sat02pap001files.storage.live.com/y4mJWKdEpn3hmr1RlEkJgVHtfH9e78S6AzuNPWMvX43Q99TDVjLIrL0MIXESN6qt_6b8CZavKGuqk7axbK-fS-RoIsBkn2Y6PdSlm0110DnIpG1EMt6t-i2IC0rulc3AzyejNxK2Qv3WGzlu8YLAwMkqSYbzjzdri7WJEfnlRL672sR6F2zHbVWttPmq9A6-RFt?width=768&height=1024&cropmode=none" 
                                    className="d-block" alt="..." 
                                    style={{height: "100%"}}
                                />
                        </div>
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>지옥문을 지키고 있는 케르베르스</h5>
                        <p>하나의 몸통에 각기 다른 머리가 3개달린 지옥의 수문장</p>
                    </div>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}