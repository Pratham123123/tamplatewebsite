var count = 0;

function restart() {
  document.querySelector("#restart").innerHTML = `
    <div id="restart"><br>
        <br>
        <br>
        <br>

        <font color="#00FE84">

            <center>
                <h1 id="won">Let's Play Rock Paper Scissor</h1>

                <br>
                <br>

                <br>
                <br>
                <table >
                    <caption id="table"></caption>
                    <tr>
                        <td rowspan="3"><b>COMPUTER</b></td>
                        <td rowspan="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td rowspan="3">
                            <div id="ans">
                                <img src="images/home.jpg" alt="" width="125px" height="125px">
                            </div>
                        </td>
                        <td rowspan="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td rowspan="3">
                            <div id="select">
                                <img src="images/home.jpg" alt="" width="125px" height="125px">
                            </div>
                        </td>
                        <td rowspan="3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                        <td id="disappear1">
                            <button  onclick="Rock()" color="#031624"> Rock </button>
                        </td>
                    </tr>
                    <tr>
                        <td id="disappear2">
                            <button  onclick="Paper()"> Paper </button>
                        </td>
                    </tr>
                    <tr>
                        <td id="disappear3" >
                            <button  onclick="Scissor()"> Scissor </button>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="7" id="rest"></td>
                    </tr>
                </table>
            </center>
        </font>
        <br>
        <br>
        <br>
        <br>
    </div>`;
}

var wincount = 0;

function RPS(user) {
  let random = Math.random() * 2;
  random = Math.round(random);
  let sum;
  {
    switch (random) {
      case 0: {
        console.log("Rock");
        document.querySelector("#ans").innerHTML =
          '<img src="images/rock.jpg" alt="" width="125px" height="125px">';
        break;
      }
      case 1: {
        console.log("Paper");
        document.querySelector("#ans").innerHTML =
          '<img src="images/paper.png" alt="" width="125px" height="125px">';
        break;
      }
      case 2: {
        console.log("Scissor");
        document.querySelector("#ans").innerHTML =
          '<img src="images/scissor.jpg" alt="" width="125px" height="125px">';
        break;
      }
    }
    if (random == 0) {
      sum = random + user;
    } else if (random == 1) {
      sum = random + user + 2;
    } else {
      sum = random + user + 4;
    }

    if (sum == 1 || sum == 5 || sum == 6) {
      wincount++;
      sum = 0;
    } else if (sum == 2 || sum == 3 || sum == 7) {
      wincount--;
      sum = 0;
    } else {
      wincount = wincount;
      sum = 0;
    }
    if (wincount > 0) {
      document.querySelector("#table").innerHTML = `<center><h1>You Won</h1></button>
    </center>`;
    document.querySelector("#disappear1").innerHTML = " ";
    document.querySelector("#disappear2").innerHTML =
      "&nbsp; &nbsp;&nbsp;&nbsp;<b>YOU</b> &nbsp; &nbsp;&nbsp;&nbsp;";
    document.querySelector("#disappear3").innerHTML = " ";
    document.querySelector(
      "#rest"
    ).innerHTML = `<center><button onclick="restart()">Restart</button></center>`;
    count = 0;
      count = 0;
    } else if (wincount == 0) {
      document.querySelector(
        "#table"
      ).innerHTML = `<center><h1>It's A Draw</h1></button>
    </center>`;
      document.querySelector("#disappear1").innerHTML = " ";
      document.querySelector("#disappear2").innerHTML =
        "&nbsp; &nbsp;&nbsp;&nbsp;<b>YOU</b> &nbsp; &nbsp;&nbsp;&nbsp;";
      document.querySelector("#disappear3").innerHTML = " ";
      document.querySelector(
        "#rest"
      ).innerHTML = `<center><button onclick="restart()">Restart</button></center>`;
      count = 0;
      count = 0;
    } else {
      document.querySelector(
        "#table"
      ).innerHTML = `<center><h1>Computer Won</h1></button>
    </center>`;
      document.querySelector("#disappear1").innerHTML = " ";
      document.querySelector("#disappear2").innerHTML =
        "&nbsp; &nbsp;&nbsp;&nbsp;<b>YOU</b> &nbsp; &nbsp;&nbsp;&nbsp;";
      document.querySelector("#disappear3").innerHTML = " ";
      document.querySelector(
        "#rest"
      ).innerHTML = `<center><button onclick="restart()">Restart</button></center>`;
      count = 0;
      count = 0;
    }
    wincount = 0;
  }
}
var user;
function Rock() {
  user = 0;
  document.querySelector("#select").innerHTML =
    '<img src="images/fliprock.jpg" alt="" width="125px" height="125px">';
  RPS(user);
}

function Paper() {
  user = 1;
  document.querySelector("#select").innerHTML =
    '<img src="images/flippaper.png" alt="" width="125px" height="125px">';
  RPS(user);
}

function Scissor() {
  user = 2;
  document.querySelector("#select").innerHTML =
    '<img src="images/flipscissor.jpg" alt="" width="125px" height="125px">';
  RPS(user);
}
