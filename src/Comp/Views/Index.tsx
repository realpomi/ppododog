import { Fragment } from "react";
import { NavBar } from "Comp/Common/NavBar";
import { CarouselView } from "Comp/Views/Main/Carousel";

export const Index = (props:any) => {
    return (
        <Fragment>
            <header>
                <NavBar />
            </header>
            <main>
                <CarouselView />
                <div className="container">
                    <div className="row" style={{marginTop: 30}}>
                        <div className="col">
                            <div className="card" style={{ width: "18rem" }}>
                                <div style={{position: "relative", height: 300, overflow: "hidden"}}>
                                    <div style={{position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>
                                        <img src="https://sat02pap001files.storage.live.com/y4mqA64Bszk9B6tpydMPLDekmZF1VZhlBNTmABd6yfSHFqtBpjxxw6mViths04vv18vm4rI5Dpw15Ssj77II-jZq-HdmUkZsxve60Txl5iy61mwiMpA3t8_AByZmH9GqdqO_j_-x-eWtpUYVoJiWpXZ6-HTLGrVKZFhsIz9zvS2WYUlh-9lnhUDpyc0M2yesb3h?width=720&height=960&cropmode=none" 
                                                className="card-img-top" 
                                                alt="..." 
                                                style={{minWidth: 400}}
                                            />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">깔끔컷 옴팡이</h5>
                                    <p className="card-text">옴팡이는 털이 하얀색이어서 좀 더 귀엽게 보여주기 위한...</p>
                                    <a href="#" className="btn btn-primary">더보기</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ width: "18rem" }}>
                                <div style={{position: "relative", height: 300, overflow: "hidden"}}>
                                    <div style={{position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>
                                        <img src="https://sat02pap001files.storage.live.com/y4m-iPfT0SXU0o1e_GX0wobKk_PAnPLUmqDM-ul6Mq06ip7RuBzNavtT-mRfN1Tzy0JHVxW1IX6dpiXvHvOY8VxLjkmWr9AlKNAfLLInposrfFhZiYKJ_osgQqfNEu3psWgrZk_R3rSnhYaeTE1RSPZErEmlwn4sgbREt_2mW1Fs_mAVDhLeFTe0K2mdEhUPlyI?width=768&height=1024&cropmode=none" 
                                                className="card-img-top" 
                                                alt="..." 
                                                style={{minWidth: 400}}
                                        />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card" style={{ width: "18rem" }}>
                                <div style={{position: "relative", height: 300, overflow: "hidden"}}>
                                    <div style={{position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>
                                        <img src="https://ch3301files.storage.live.com/y4mTIZtXF657fu1jCJX-eRDPWgFF5RrRqLq1rf7ra9UHZvsbv1lV2iNHyyPHef38NFycJXeT9ZZTHo0mlabmJL2p53pf-WQ2o4GEsjqmb3FA2g0jRi87n_T2qwR1IlJXpmQv1Mq-tPIi-z7eiXUSQHZ5u2Ex2J4anUG0hthIRfwUGmPTrdveHLUmkUmPb3QW04A?width=2560&height=1920&cropmode=none" 
                                                className="card-img-top" 
                                                alt="..." 
                                                style={{minWidth: 400}}
                                            />
                                    </div>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}