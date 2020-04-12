import React, { useEffect } from "react";
import M from "materialize-css";

function DualPage() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className="Padding">
      <div className="row">
        <div className="col s12">
          <ul className="tabs">
            <li className="tab col s6">
              <a href="#test1">QR Code</a>
            </li>
            <li className="tab col s6">
              <a className="active" href="#test2">
                Dynamic QR Code
              </a>
            </li>
          </ul>
        </div>
      </div>
          {/* This is the left most tab page */}
      <div id="test1" className="col s12">
        <div className="flexContainer">
          <img src="src\styles\scss\img\QR IMG.png" alt="QR"></img>
        </div>
        <div className="container boarder">
          <div className="row">
            {/*       First row */}
            <p className="col s3">Locked</p>
            <p className="col s3">Url</p>
            <p className="col s3">Locked</p>
            {/*       Second row */}
            <p className="col s3">Locked</p>
            <p className="col s3">Vcard</p>
            <p className="col s3">Locked</p>
            {/*       Third row */}
            <p className="col s3">Locked</p>
            <p className="col s3">Vcard</p>
            <p className="col s3">Locked</p>

            <p className="col s12 s12CreateQR">Create your new QR code here!</p>
          </div>

          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="textarea1"
                    className="materialize-textarea"
                  ></textarea>
                  <label>Enter Text</label>
                </div>
              </div>
            </form>
          </div>
          <div className="flexContainer">
            <button className="d-flex col btn waves-effect waves-light">
              Generate QR Code
            </button>
          </div>
          <div className="flexContainer">
            <button className="d-flex col btn waves-effect waves-light">
              Get The URL Ref Tag
            </button>
            <button className="d-flex col btn waves-effect waves-light">
              Download QR Image
            </button>
          </div>
        </div>
      </div>
              {/* This is the right most tab page */}
      <div id="test2" className="col s12">
      <div id="test1" className="col s12">
        <div className="flexContainer">
          <img src="src\styles\scss\img\QR IMG.png" alt="QR"></img>
        </div>
        <div className="container boarder">
          <div className="row">
            {/*       First row */}
            <p className="col s3">Unlocked</p>
            <p className="col s3">Url</p>
            <p className="col s3">Unlocked</p>
            {/*       Second row */}
            <p className="col s3">Unlocked</p>
            <p className="col s3">Vcard</p>
            <p className="col s3">Unlocked</p>
            {/*       Third row */}
            <p className="col s3">Unlocked</p>
            <p className="col s3">Vcard</p>
            <p className="col s3">Unlocked</p>

            <p className="col s12 s12CreateQR">Create your new QR code here!</p>
          </div>

          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    id="textarea1"
                    className="materialize-textarea"
                  ></textarea>
                  <label>Enter Text</label>
                </div>
              </div>
            </form>
          </div>
          <div className="flexContainer">
          <button className="d-flex col btn waves-effect waves-light">
              Generate QR Code
            </button>
          </div>
          <div className="flexContainer">
            <button className="d-flex col btn waves-effect waves-light">
              Get The URL Ref Tag
            </button>
            <button className="d-flex col btn waves-effect waves-light">
              Download QR Image
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default DualPage;
