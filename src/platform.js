// class Platform {
//   constructor(x, y, width, color) {
//     this.x = x;
//     this.y = y;

//     this.width = width;
//     this.color = color;

//     this.onScreen = true;
//   }

//   draw = (y) => {
//     stroke(255);
//     strokeWeight(3);
//     fill(this.color);

//     // relative to player
//     if (y - this.y < height / 2) {
//       // on-screen

//       rect(this.x, y - this.y + height / 2, this.size, 15);
//     } else {
//       this.onScreen = false;
//     }
//   };

//   collidesWith = (player) => {
//     let platformTop = this.altitude;
//     let playerBottom = player.loc.y - player.size / 2;

//     stroke("#FF0000");
//     strokeWeight(10);

//     if (
//       Math.abs(platformTop - playerBottom) < -player.vel.y &&
//       platformTop < playerBottom
//     ) {
//       let platformLeftX = this.x; // platform lefter-most x bound
//       let platformRightX = this.x + this.size; // platform righter-most x bound

//       let playerLeftX = player.loc.x - player.size / 2; // player lefter-most x bound
//       let playerRightX = player.loc.x + player.size / 2; // player righter-most x bound

//       return (
//         (playerLeftX >= platformLeftX && // if the player's left X falls between the platform
//           playerLeftX <= platformRightX) ||
//         (playerRightX >= platformLeftX && // if the player's right X falls between the platform
//           playerRightX <= platformRightX)
//       );
//     }

//     return false;
//   };
// }

///

class Platform {
  constructor(x, altitude, size, color) {
    this.x = x;
    this.altitude = altitude;

    this.size = size;
    this.color = color;

    this.onScreen = true;
  }

  /**
   * draws platform at altitude
   */
  draw = (altitude) => {
    stroke(255);
    strokeWeight(3);
    fill(this.color);

    // relative to player
    if (altitude - this.altitude < height / 2) {
      // on-screen

      rect(this.x, altitude - this.altitude + height / 2, this.size, 15);
    } else {
      this.onScreen = false;
    }
  };

  /**
   * returns whether passed Player hits the platform
   */
  collidesWith = (player) => {
    let platformTop = this.altitude;
    let playerBottom = player.loc.y - player.size / 2;

    stroke("#FF0000");
    strokeWeight(10);

    if (
      Math.abs(platformTop - playerBottom) < -player.vel.y &&
      platformTop < playerBottom
    ) {
      let platformLeftX = this.x; // platform lefter-most x bound
      let platformRightX = this.x + this.size; // platform righter-most x bound

      let playerLeftX = player.loc.x - player.size / 2; // player lefter-most x bound
      let playerRightX = player.loc.x + player.size / 2; // player righter-most x bound

      return (
        (playerLeftX >= platformLeftX && // if the player's left X falls between the platform
          playerLeftX <= platformRightX) ||
        (playerRightX >= platformLeftX && // if the player's right X falls between the platform
          playerRightX <= platformRightX)
      );
    }

    return false;
  };
}
