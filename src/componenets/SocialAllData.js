import React from "react";
import windowLogo from "../images/Windows8.png";
import Lodding from "../componenets/Lodding";
import { useNavigate } from "react-router-dom";
const SocialAllData = ({ socialdata, loddingsoc }) => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="m-t">TOP SOCIAL GAMES</h1>
      <div className="socialdata">
        {loddingsoc ? (
          <Lodding/>
        ) : (
          socialdata.map((res, index) => {
            return (
              <>
                <div className="H-card" onClick={() => navigate(`/${res.id}`)}>
                  <div className="img-d-h">
                    <img
                      className="poster-h"
                      src={res.thumbnail}
                      alt="poster.jpg"
                    />
                  </div>
                  <h1 className="titale-h">{res.title}</h1>
                  <div className="item-h">
                    <h1 className="relege-date-h">
                      release_date:{res.release_date}
                    </h1>
                    <img
                      className="window-h"
                      src={windowLogo}
                      alt="Window.png"
                    />
                  </div>
                </div>
              </>
            );
          })
        )}
      </div>
    </>
  );
};

export default SocialAllData;
