$(function(){function gweiTowei(_in){return(_in*1000000000);} var currentPage=3;var hideAllPages=function(){$("#page-landing, #page-faq, #page-account, #page-direct, #page-multi, #page-header, #loader").hide();};var toggleLoader=function(s){$("#loader").toggle();if(s!=""){$("#loader > img").attr("src","img/loader-"+s+".png");}};var showLoader=function(s){$("#loader").show();if(s!=""){$("#loader > img").attr("src","img/loader-"+s+".png");}};var hideLoader=function(){$("#loader").hide();};var showAccountPage=function(){switch(currentPage){case 1:showDirectPage();break;case 2:showMultiPage();break;} hideAllPages();$("#page-header, #page-account").show();};var showDirectPage=function(){hideAllPages();$("#page-header, #page-direct").show();currentPage=1;};var showMultiPage=function(){hideAllPages();$("#page-header, #page-multi").show();currentPage=2;};var hideConnectBtn=function(){$("#btnConnect").hide();};var showConnectBtn=function(){$("#btnConnect").show();};var hideRegBtn=function(){$("#btnReg").hide();};var showRegBtn=function(){$("#btnReg").show();};var showHowBtn=function(){$("#btnHow").show();};var hideHowBtn=function(){$("#btnHow").hide();};hideRegBtn();hideAllPages();$("#page-landing").show();$("#btnLogout").on("click",function(e){Cookies.set('ref',"");showLoader("wait");setTimeout(function(){top.location.href=top.location.origin+top.location.pathname;},1500);});$("#faqButton").on("click",function(e){$("#page-faq").show().css({top:0});});$("#faqButtonClose").on("click",function(e){$("#page-faq").css({top:"100%"});setTimeout(function(){$("#page-faq").hide()},1000);});$("#btnDirectPage").on("click",function(e){currentPage=1;showDirectPage();});$("#btnMultiPage").on("click",function(e){currentPage=2;showMultiPage();});$("#btnAccountPage").on("click",function(e){currentPage=3;showAccountPage();});var $direct=$("#page-direct .container");var $multi=$("#page-multi .container");for(var i=0,t,u,p=0.01;i<12;i++){p=p*2;t=$("<div id='direct_level"+(i+1)+"' class='disabled'></div>");u=$("<div id='multi_level"+(i+1)+"' class='disabled'></div>");t.append("<h3>LEVEL "+(i+1)+"</h3><h5>ETH earned: <span id='direct_level"+(i+1)+"_earned'>-</span></h5>");u.append("<h3>LEVEL "+(i+1)+"</h3><h5>ETH earned: <span id='multi"+(i+1)+"_earned'>-</span></h5>");t.append("<table><tr><td>&nbsp;</td><td><span id='direct_level"+(i+1)+"_referrer'>&mdash;</span></td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td><span id='direct_idOfLevel"+(i+1)+"_1'>&mdash;</span></td><td><span id='direct_idOfLevel"+(i+1)+"_2'>&mdash;</span></td><td>&nbsp;</td></tr></table><span id='direct_level"+(i+1)+"_buy' class='hide'><button id='directBuyBtn_level"+(i+1)+"'>UNLOCK ("+p.toString()+" ETH)</button></span><br><hr>");u.append("<table><tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td><span id='multi_level"+(i+1)+"_referrer'>&mdash;</span></td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td><span id='multi_idOfLevel"+(i+1)+"_1_1'>&mdash;</span></td><td>&nbsp;</td><td><span id='multi_idOfLevel"+(i+1)+"_1_2'>&mdash;</span></td><td>&nbsp;</td><td>&nbsp;</td></tr> <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr> <tr><td><span id='multi_idOfLevel"+(i+1)+"_2_1'>&mdash;</span></td><td>&nbsp;</td><td><span id='multi_idOfLevel"+(i+1)+"_2_2'>&mdash;</span></td><td>&nbsp;</td><td><span id='multi_idOfLevel"+(i+1)+"_2_3'>&mdash;</span></td><td>&nbsp;</td><td>&nbsp;</td></tr></table><span id='multi_level"+(i+1)+"_buy' class='hide'><button id='multiBuyBtn_level"+(i+1)+"'>UNLOCK ("+p.toString()+" ETH)</button></span><br><hr>");$direct.append(t);$multi.append(u);} var isMobile=false;var hasMetamask=false;var hasWeb3Wallet=false;var web3Provider;var summitEthProvider;var summitEthConn;var summitEthContract;var useLocal=false;var summitServer=(useLocal)?"ws://127.0.0.1:8545":"wss://ropsten.infura.io/ws/v3/8d8fc8f952d54c358dad23a1caff3be2";var ethContractAddr=(useLocal)?"0xb4c6113eb5eec093a5bea2414605dbbee5c496c0":"0xb956a698790765D582a049a0c664262D88412Dbe";var defAcc="0x9221E96fa80104162D6f5aaBB6BBDEf27bE5958f";var ethContract;var usrWalletAddress;var currUserID=2;var userObj;var referrer;var referrerShort;var referrerAddress;var requiresFreeRef=false;var TOKEN_DECIMALS=1e18;var currentETHbalance=0;var userWalletEnabled=false;var canPlay=true;var registrationBtnOpen=false;var levelPrice=[] levelPrice[0]=new BigNumber(20000000000000000);for(let c=1;c<12;c++){levelPrice[c]=new BigNumber(levelPrice[c-1]).times(2);} var gasPrice=350;var direct_matrix_friends_by_level=new Array(12);var direct_matrix_reinvests_by_level=new Array(12);var direct_matrix_missed_by_level=new Array(12);var direct_matrix_extra_by_level=new Array(12);var multi_matrix_friends_by_level=new Array(12);var multi_matrix_reinvests_by_level=new Array(12);var multi_matrix_missed_by_level=new Array(12);var multi_matrix_extra_by_level=new Array(12);var direct_earnings_by_level=new Array(12);var multi_earnings_by_level=new Array(12);var totalEarnings=new BigNumber(0);for(let c=0;c<12;c++){direct_matrix_friends_by_level[c]=[];multi_matrix_friends_by_level[c]=[];direct_matrix_reinvests_by_level[c]=[];multi_matrix_reinvests_by_level[c]=[];direct_matrix_missed_by_level[c]=[];multi_matrix_missed_by_level[c]=[];direct_matrix_extra_by_level[c]=[];multi_matrix_extra_by_level[c]=[] direct_earnings_by_level[c]=new BigNumber(0);multi_earnings_by_level[c]=new BigNumber(0);} var isMobileCheck=window.matchMedia("only screen and (pointer:coarse)");if(isMobileCheck.matches){isMobile=true;} const isMetaMaskInstalled=()=>{const{ethereum}=window;return Boolean(ethereum&&ethereum.isMetaMask);};const onClickConnect=async()=>{try{showLoader("wallet");if(ethereum.enable){try{await ethereum.enable();userWalletEnabled=true;beginSetup();}catch(e){}}else if(window.web3){userWalletEnabled=true;beginSetup();}else{beginSetup();}}catch(error){hideLoader();console.error(error);}};setupRates();getGasPrices();var readonlyEnv=false;setupReadOnlyWeb3(function(){readonlyEnv=true;});function setupReadOnlyWeb3(_callback){summitEthProvider=new Web3.providers.WebsocketProvider(summitServer);summitEthProvider.on('connect',function(e){summitEthConn=new Web3(summitEthProvider);summitEthContract=new summitEthConn.eth.Contract(summitAbi.abi,ethContractAddr);getSummitStats();if(_callback) _callback();setTimeout(function(){},2000);});summitEthProvider.on('error',function(e){reconnectProvider(0);});summitEthProvider.on('end',function(e){reconnectProvider(0);});} function reconnectProvider(_tries){try{console.log("ws restarting...");summitEthProvider=new Web3.providers.WebsocketProvider(summitServer);summitEthProvider.on('connect',function(){console.log('WSS Reconnected');summitEthConn=new Web3(summitEthProvider);summitEthContract=new summitEthConn.eth.Contract(summitAbi.abi,ethContractAddr);});summitEthProvider.on('error',function(e){console.log('ws reconnect error',e);reconnectProvider(_tries++);});summitEthProvider.on('end',function(e){console.log('ws reconnect end',e);reconnectProvider(_tries++);});}catch(e){console.log(e);_tries++;if(_tries<20){setTimeout(function(){reconnectProvider(_tries);},500);}else{}}} function getSummitStats(){summitEthContract.methods.lastUserId().call(function(_err,_result){if(!_err){console.log("lastuserid: "+_result);}});summitEthContract.methods.totalDivs().call(function(_err,_result){if(!_err){let _divs=new BigNumber(_result);let _totalEth=_divs.div(2).times(100);let _btc=_totalEth.div(TOKEN_DECIMALS).div(new BigNumber(exchange_btc_eth));let _usd=_btc.times(exchange_btc_usd);console.log("TotalETH: "+_totalEth.div(TOKEN_DECIMALS).toFixed(8));console.log("TotalBTC: "+_btc.toFixed(8));console.log("TotalUSD: $"+_usd.toFixed(2));}});setTimeout(function(){getSummitStats();},15000);} function beginSetup(){web3Provider=new Web3(window.web3.currentProvider);checkNetwork(startGame);} var _newReferrer=getUrlParameter('ref')||"";if(_newReferrer.length>0){referrer=_newReferrer;}else{var _cookieRef=Cookies.get('ref')||"";if(_cookieRef.length>0) referrer=_cookieRef;} Cookies.set('ref',referrer,{expires:60});console.log("REF:",referrer);if(referrer) referrerShort=referrer.substring(0,20)+"...";hasMetamask=isMetaMaskInstalled();if(hasMetamask){hasWeb3Wallet=true;}else{if(window.web3){ethereum=window.web3;hasWeb3Wallet=true;}} if(hasWeb3Wallet){showConnectBtn();hideHowBtn();}else{showHowBtn();hideConnectBtn();hideRegBtn();} console.log("hasWeb3Wallet:",hasWeb3Wallet);console.log("isMetaMaskInstalled:",isMetaMaskInstalled());setupButtons();function checkNetwork(_callback){web3Provider.eth.net.getNetworkType(function(err,res){ethContract=new web3Provider.eth.Contract(summitAbi.abi,ethContractAddr);if(_callback) _callback();});} function startGame(){if(isMobile){setTimeout(function(){mainEntry();},1000);}else{mainEntry();} function mainEntry(){if(!readonlyEnv){setupReadOnlyWeb3(function(){getUserWalletAddress(function(){setupUser();});});}else{getUserWalletAddress(function(){setupUser();});}}} function getUserWalletAddress(_callback){web3Provider.eth.getCoinbase((err,res)=>{var output="";if(!err){output=res;usrWalletAddress=output;usrWalletAddressShort=output.substring(0,20)+"...";$('#inpInviteUrl').val(top.location.origin+top.location.pathname+"?ref="+output);$('#btnConnect').addClass('hide');ethContract.methods.users(usrWalletAddress).call({from:usrWalletAddress},function(_err,_result){if(_result.id>0){userObj=_result;showUser(_result);}else{hideLoader();$('#regDiv').removeClass('hide');showRegBtn();if(isAddress(referrer)&&referrer.toUpperCase()!=usrWalletAddress.toUpperCase()){$('#inpReferrer').val(referrer);}else{referrer=defAcc;$('#inpReferrer').val("[un-referred]");Cookies.set('ref',referrer,{expires:60});}}});if(output){usrWalletAddressShort=output.substring(0,10)+"...";if(_callback) _callback();} else {canPlay=false;}}else{output="Error";canPlay=false;}})} function populateEarnings(level){ethContract.methods.userEarnings(usrWalletAddress,level).call(function(_err,_result){if(!_err){direct_earnings_by_level[Number(level-1)]=new BigNumber(_result.directMatrixEarnings);multi_earnings_by_level[Number(level-1)]=new BigNumber(_result.multiMatrixEarnings);totalEarnings=totalEarnings.plus(new BigNumber(_result.directMatrixEarnings));totalEarnings=totalEarnings.plus(new BigNumber(_result.multiMatrixEarnings));$('#direct_level'+level+'_earned').html(direct_earnings_by_level[Number(level-1)].div(TOKEN_DECIMALS).toFixed(8));$('#multi_level'+level+'_earned').html(multi_earnings_by_level[Number(level-1)].div(TOKEN_DECIMALS).toFixed(8));if(level<13){populateEarnings(level+1);}else{let _btc=totalEarnings.div(TOKEN_DECIMALS).div(new BigNumber(exchange_btc_eth));let _usd=_btc.times(exchange_btc_usd);$('#inpMatrixEarnings').val(totalEarnings.div(TOKEN_DECIMALS).toFixed(8)+" ETH ($"+_usd.toFixed(2)+")");}}});} function setupUser(_callback){console.log("CHECKING USER...");populateEarnings(1);populateDirectLevels(1);} function populateDirectLevels(level){ethContract.methods.usersActiveDirectLevels(usrWalletAddress,level).call(function(_err,_result){console.log("populateDirectLevels:",_result);if(_result==true){$('#direct_level'+level+'_stats').removeClass('hide');$('#direct_level'+level+'_buy').removeClass('hide');$('#direct_level'+level+'_buy').addClass('hide');$('#direct_level'+level).removeClass('hide');$('#direct_level'+level).removeClass('disabled');ethContract.methods.usersDirectMatrix(usrWalletAddress,level).call(function(_err,_results){ethContract.methods.users(_results[0]).call(function(_err,_result){if(!_err){$('#direct_level'+level+'_referrer').html(_result.id);$('#direct_level'+level+'_referrer').attr("title","Current Referrer ID:"+_result.id+","+" Addr:"+_results[0]);}});if(_results[2]==true){$('#direct_level'+level).addClass('disabled');toastMessage("Level "+level+" is blocked for further friend payments until you upgrade to the next level!","Upgrade needed",30000);} for(let c=0;c<_results[1].length;c++){ethContract.methods.users(_results[1][c]).call(function(_err,_result){$('#direct_idOfLevel'+level+'_'+Number(c+1)).html(_result.id);$('#direct_idOfLevel'+level+'_'+Number(c+1)).attr("title","Friend ID:"+_result.id+","+" Addr:"+_results[1][c]);});} if(level<13) populateDirectLevels(level+1);else populateMultiLevels(1);});}else{$('#direct_level'+level).removeClass('hide');$('#direct_level'+level).removeClass('disabled');$('#direct_level'+level).addClass('disabled');$('#direct_level'+level+'_stats').removeClass('hide');$('#direct_level'+level+'_stats').addClass('hide');$('#direct_level'+level+'_buy').removeClass('hide');for(let c=Number(level+1);c<13;c++){$('#direct_level'+c).removeClass('hide');$('#direct_level'+c).removeClass('disabled');$('#direct_level'+c).addClass('disabled');$('#direct_level'+c).addClass('hide');} populateMultiLevels(1);}});} function populateMultiLevels(level){ethContract.methods.usersActiveMultiLevels(usrWalletAddress,level).call(function(_err,_result){if(_result==true){$('#multi_level'+level+'_stats').removeClass('hide');$('#multi_level'+level+'_buy').removeClass('hide');$('#multi_level'+level+'_buy').addClass('hide');$('#multi_level'+level).removeClass('disabled');$('#multi_level'+level).removeClass('hide');ethContract.methods.usersMultiMatrix(usrWalletAddress,level).call(function(_err,_results){ethContract.methods.users(_results[0]).call(function(_err,_result){if(!_err){$('#multi_level'+level+'_referrer').html(_result.id);$('#multi_level'+level+'_referrer').attr("title","Current Referrer ID:"+_result.id+","+" Addr:"+_results[0]);}});if(_results[3]==true){$('#multi_level'+level).addClass('disabled');toastMessage("Level "+level+" is blocked for further friend payments until you upgrade to the next level!","Upgrade needed",30000);} for(let c=0;c<_results[1].length;c++){ethContract.methods.users(_results[1][c]).call(function(_err,_result){$('#multi_idOfLevel'+level+'_1_'+Number(c+1)).html(_result.id);$('#multi_idOfLevel'+level+'_1_'+Number(c+1)).attr("title","Friend ID:"+_result.id+","+" Addr:"+_results[1][c]);});} for(let c=0;c<_results[2].length;c++){ethContract.methods.users(_results[2][c]).call(function(_err,_result){$('#multi_idOfLevel'+level+'_2_'+Number(c+1)).html(_result.id);$('#multi_idOfLevel'+level+'_2_'+Number(c+1)).attr("title","Friend ID:"+_result.id+","+" Addr:"+_results[2][c]);});} if(level<13) populateMultiLevels(level+1);});}else{$('#multi_level'+level).removeClass('hide');$('#multi_level'+level).removeClass('disabled');$('#multi_level'+level).addClass('disabled');$('#multi_level'+level+'_stats').removeClass('hide');$('#multi_level'+level+'_stats').addClass('hide');$('#multi_level'+level+'_buy').removeClass('hide');for(let c=Number(level+1);c<13;c++){$('#multi_level'+c).removeClass('disabled');$('#multi_level'+c).removeClass('hide');$('#multi_level'+c).addClass('disabled');$('#multi_level'+c).addClass('hide');}}});} function openContract(){var win=window.open("https://etherscan.io/address/"+ethContractAddr,'_blank');win.focus();} function openGuide(){var win=window.open("https://ethmatrix.network/ETHMatrix.pdf",'_blank');win.focus();} var exchange_btc_eth=0;var exchange_btc_usd=0;function setupRates(){$.ajax({type:'GET',url:'https://api.coinbase.com/v2/exchange-rates?currency=BTC',data:{get_param:'value'},dataType:'json',success:function(data){console.log("BTC PRICE:",data.data.rates.USD);exchange_btc_eth=data.data.rates.ETH;exchange_btc_usd=data.data.rates.USD;}});} function getGasPrices(){$.ajax({type:'GET',url:'https://ethgasstation.info/json/ethgasAPI.json',data:{get_param:'value'},dataType:'json',success:function(data){console.log("GAS PRICES:",data,data.fast,data.fastest,data.average);gasPrice=data.fast/10;}});} function calcActiveDays(){const oneDay=24*60*60*1000;const firstDate=new Date(2020,5,15);const secondDate=new Date();const diffDays=Math.round(Math.abs((firstDate-secondDate)/oneDay));console.log("ACTIVE DAYS:",diffDays);if(diffDays>1) $('#activeDays').html(Number(diffDays-1)+" days");else $('#activeDays').html(Number(diffDays-1)+" day");} function withdraw(){ethContract.methods.claimDivs().estimateGas({from:usrWalletAddress},function(_err,_gasAmount){if(_err){console.log(_err);toastMessage("An error occured sending your transaciton - please ensure you have enough gas and try again","Error with transaciton",15000);return;}else{showLoader("wait");ethContract.methods.claimDivs().send({from:usrWalletAddress,gasPrice:gweiTowei(gasPrice),gas:_gasAmount},function(_err,result){if(_err){hideLoader();toastMessage("An error occured sending your transaciton - please ensure you have enough gas and try again","Error with transaciton",15000);return;}else{hideLoader();$('#divsAvail').html("0");toastMessage("Dividends are being processed by the blockchain and will be in your wallet shortly!","Withdrawing Dividends",30000);}});}});} function reg(){showLoader("wallet");console.log("REG:",referrer,levelPrice[0].times(2).toString());ethContract.methods.users(referrer).call(function(_err,_result){let _referrerExists=true;if(!_err){_referrerExists=true;}else{if(_result.id==0) _referrerExists=false;} if(!_referrerExists) referrer=defAcc;Cookies.set('ref',referrer,{expires:60});ethContract.methods.registrationExt(referrer).estimateGas({from:usrWalletAddress,value:levelPrice[0].times(2)},function(_err,_gasAmount){if(_err){console.log(_err);toastMessage("An error occured sending your transaciton - please ensure you have enough funds and try again","Error with transaciton",15000);return;}else{showLoader("reg");ethContract.methods.registrationExt(referrer).send({from:usrWalletAddress,value:levelPrice[0].times(2),gasPrice:gweiTowei(gasPrice),gas:_gasAmount},function(_err,result){if(_err){hideLoader();toastMessage("An error occured sending your transaciton - please ensure you have enough funds and try again","Error with transaciton",15000);return;}else{userChecks=0;checkUserComplete();}});}});});} function buyLvl(matrix,level){ethContract.methods.buyNewLevel(matrix,level).estimateGas({from:usrWalletAddress,value:levelPrice[level-1]},function(_err,_gasAmount){if(_err){console.log(_err);toastMessage("An error occured sending your transaciton - please ensure you have enough funds and try again","Error with transaciton",15000);return;}else{showLoader("wait");ethContract.methods.buyNewLevel(matrix,level).send({from:usrWalletAddress,value:levelPrice[level-1],gasPrice:gweiTowei(gasPrice),gas:_gasAmount},function(_err,result){if(_err){hideLoader();toastMessage("An error occured sending your transaciton - please ensure you have enough funds and try again","Error with transaciton",15000);return;}else{buyChecks=0;levelChecking=level;matrixChecking=matrix;checkBuyComplete();}});}});} var buyChecks=0;var levelChecking=0;var matrixChecking=0;function checkBuyComplete(){console.log("CHECK BUY COMPLETE:",buyChecks);if(matrixChecking==1){ethContract.methods.usersActiveDirectLevels(usrWalletAddress,levelChecking).call(function(_err,_result){if(_result==true){setTimeout(function(){showUser(_result);setupUser();hideLoader();},1500);}else{if(buyChecks<500){setTimeout(function(){buyChecks++;checkBuyComplete();},1500);}else{hideLoader();toastMessage("An error occured checking your transaction - please refresh the page to check confirmation","Error with transaciton",15000);}}});}else{ethContract.methods.usersActiveMultiLevels(usrWalletAddress,levelChecking).call(function(_err,_result){if(_result==true){setTimeout(function(){showUser(_result);setupUser();hideLoader();},1500);}else{if(buyChecks<500){setTimeout(function(){buyChecks++;checkBuyComplete();},1500);}else{hideLoader();toastMessage("An error occured checking your transaction - please refresh the page to check confirmation","Error with transaciton",15000);}}});}} var userChecks=0;function checkUserComplete(){console.log("CHECK USER COMPLETE:",userChecks);ethContract.methods.users(usrWalletAddress).call({from:usrWalletAddress},function(_err,_result){if(_result.id>0){setTimeout(function(){showUser(_result);setupUser();hideLoader();},1500);}else{setTimeout(function(){userChecks++;checkUserComplete();},1500);}});} var divsClaimed=new BigNumber(0);var divsAvail=new BigNumber(0);function showUser(_UserObj){$('#regDiv').addClass('hide');showAccountPage();$('#inpReferrer2').val(_UserObj.referrer);$('#totalFriends').html(_UserObj.friendsCount);divsClaimed=new BigNumber(_UserObj.divsClaimed);getDivs();} function getDivs(){ethContract.methods.viewDivs(usrWalletAddress).call(function(_err,_result){if(!_err){divsAvail=new BigNumber(_result);$('#totalDivs').html(divsClaimed.plus(divsAvail).div(TOKEN_DECIMALS).toFixed(4));$('#inpShareAmount').val(divsAvail.div(TOKEN_DECIMALS).toFixed(8)+" ETH");}});} function openGuide(){var win=window.open("/ETHMatrix.pdf",'_blank');win.focus();} function setupButtons(){$('#btnWithdraw').click(function(){if(!canPlay){notLoggedInMsg();}else{withdraw();}});$('#btnHow').click(function(){openGuide();});$('#btnConnect').click(function(){if(hasWeb3Wallet){onClickConnect();}else{toastMessage("You must have a Web3 wallet installed and logged in to connect to ETHMatrix");}});$("#btnCopyInvite").on("click",function(e){copy(document.querySelector("#inpInviteUrl"));});$('#viewContractBtn').click(function(){openContract();});$('#btnReg').click(function(){if(!canPlay){notLoggedInMsg();}else{reg();}});for(let c=2;c<13;c++){$('#directBuyBtn_level'+c).click(function(){if(!canPlay){notLoggedInMsg();}else{buyLvl(1,c);}});} for(let c=2;c<13;c++){$('#multiBuyBtn_level'+c).click(function(){if(!canPlay){notLoggedInMsg();}else{buyLvl(2,c);}});} return;} function notLoggedInMsg(){showError("Unable to open your Ethereum Wallet, you need to have a Web3 wallet such as MetaMask installed and unlocked/logged in.<br/><br/>If this issue continues please contact support.");} function showError(_msg){$('#errorMsg').html(_msg);$('#errorPanel').foundation('open');} function toastMessage(_msg,_header,_timeout){console.log("TOAST: "+_msg);} function copy(element){document.execCommand('copy',false,element.select());toastMessage("Link copied to your clipboard","Referral Link");} function getUrlParameter(sParam){var sPageURL=decodeURIComponent(window.location.search.substring(1)),sURLVariables=sPageURL.split('&'),sParameterName,i;for(i=0;i<sURLVariables.length;i++){sParameterName=sURLVariables[i].split('=');if(sParameterName[0]===sParam){return sParameterName[1]===undefined?true:sParameterName[1];}}};function isAddress(address){return(/^(0x){1}[0-9a-fA-F]{40}$/i.test(address));}});