const ConnectWalletModal = () => {
    return (
        <div id="connect-wallet-modal" className="modal">
            <div className="modal-header flex-div justify-content-btw">
                <div className="modal-title">Connect Wallet</div>
                <img src={require("../images/close-modal.svg").default} alt="close" className="modal-close close-modal" />
            </div>
            <div className="modal-content">
                <div className="modal-txt">Choose your preferred wallet:</div>

                <div className="connet-option flex-div justify-content-btw">
                    <div className="flex-div">
                        <img src={require("../images/fox.svg").default} alt="fox" className="connect-option-img" />
                        <span className="connect-option-title">Metamask</span>
                    </div>
                    <img src={require("../images/right-arr.svg").default} alt="right arrow" className="right-arr" />
                </div>
                <div className="connet-option flex-div justify-content-btw">
                    <div className="flex-div">
                        <img src={require("../images/connect.svg").default} alt="connect" className="connect-option-img" />
                        <span className="connect-option-title">WalletConnect</span>
                    </div>
                    <img src={require("../images/right-arr.svg").default} alt="right arrow" className="right-arr" />
                </div>
            </div>
        </div>
    )
}

export default ConnectWalletModal;