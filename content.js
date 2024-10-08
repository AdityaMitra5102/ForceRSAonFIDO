console.log('Extension loaded');
const createbkp=navigator.credentials.create;
function create(options)
{
	let rsaavailable=false;
	if(options.publicKey.pubKeyCredParams.length==0)
	{
		rsaavailable=true;
	}
	for(let i=0;i<options.publicKey.pubKeyCredParams.length;i++)
	{
		if(options.publicKey.pubKeyCredParams[i].alg==-257)
		{
			rsaavailable=true;
		}
	}

	if(rsaavailable)
	{
		alert("Forcing only RSA: RS256 (RSA + SHA-256)");
		var o={}
		o.type="public-key";
		o.alg=-257;
		var arr=[];
		arr.push(o);
		options.publicKey.pubKeyCredParams=arr;
	}
	else
	{
		alert("RSA Unavailable. Using existing params.");
	}
	console.log("Modified options");	
	console.log(options);
	ret= createbkp.call(navigator.credentials, options);
	console.log(ret)
	return ret;
}
navigator.credentials.create=create;
