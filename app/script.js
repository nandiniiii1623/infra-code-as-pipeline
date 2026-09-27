function addLog(message){

    const logs=document.getElementById("logs");

    const li=document.createElement("li");

    li.innerHTML=message;

    logs.appendChild(li);
}

function deploy(){

    document.getElementById("pipeline").innerHTML="Running...";

    addLog("🚀 GitHub Actions Triggered");

    setTimeout(function(){

        addLog("📦 Building Docker Image");

    },1000);

    setTimeout(function(){

        addLog("☁ Pushing Image to Amazon ECR");

    },2500);

    setTimeout(function(){

        addLog("📤 Deploying to ECS Fargate");

    },4000);

    setTimeout(function(){

        addLog(" Health Checks Passed");

    },5500);

    setTimeout(function(){

        document.getElementById("pipeline").innerHTML="✔ Success";

        addLog("✅ Deployment Completed Successfully");

        alert("Deployment Successful!");

    },7000);

}