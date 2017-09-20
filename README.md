# fanuc-webcontrol

## Overview
Simple software to control FANUC six degree of freedom robotic arms through a web browser.

![Image of fanuc-webcontrol](preview.png)

**NOTE**: It is an experimental software. Do not use this in production systems!

THE SOFTWARE IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL, BUT WITHOUT ANY WARRANTY. IT IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE SOFTWARE IS WITH YOU. SHOULD THE SOFTWARE PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.

## TOC
1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Example usage](#example-usage)
5. [Notes](#notes)
6. [Acknowledgement](#acknowledgement)
7. [Bugs, feature requests, etc](#bugs-feature-requests-etc)

## Requirements
This is written in Fanuc Karel language, TP code and JavaScript. It is tested on FANUC M-430iA2P robot with R-J3iC controller v7.40

The following registers [R], position registers[PR] and FLAGs are used:
- [R]: 42 - 56,
- [PR]: 40, 41,
- FLAG: 1 - 8,

If these (position) registers and/or flags are not free, than you can choose anothers, but you have to update these numbers in the karel programs and the `webmotion.tp` file.

Internet connection is also required because the Bootstrap, PEP and JQuery libraries are loaded from CDNs.

## Installation
1. Copy the `*.pc` and files from the `karel` folder to the robot `MD:` folder
2. Copy the `*.htm` file from the `examples` folder to the robot `MD:` folder
3. Copy the `webmotion.tp` file from the `tpe` folder to the robot `MD:` folder

## Configuration
Set UNLOCK to HTTP authentication of KAREL: 
1. On the Teach Pendant select `Menu -> Setup -> Host Comm`
2. Set the cursor on `HTTP`
3. Push `F3[DETAIL]`
4. Set the cursor on `A` left side of KAREL. Select `F3[UNLOCK]`

## Example usage
Run the WEBMOTION tp program on the controller or open a browser and type: http://robotIP/md/webpanel.htm and click on the `Start` button (`Reset` may be needed)
- SET: 
  * Set the axis limits. The default values are 0, thus you have to change these to make possible any movement.
  * Move the TCP to a predefined position (Click on a button, and wait until the robot completes the movement.) **Important: SEE NOTE NO.2**
- JOG: Jogging the robot (Push and hold down a button, but only use just one at the same time!)
- CART: Move the TCP +/-xyz direction and/or rotate it in the currently selected tool coordinate system. (Push and hold down a button, but only use just one at the same time!)
- Webjoystick: http://robotIP/md/webjoystick.htm
- Webtouchpad: http://robotIP/md/webtouchpad.htm

## Notes
1. You can change the default steps (1 degree, 3 mm) in the javascript part of the `webpanel.htm`. In this case you may also have to update the `setInt` variable in this file.
2. The predefined positions were tested on FANUC M-430iA2P. If you have an other type of FANUC robot, you might have to change these positions' coordinates.
3. The PR[40] and PR[41] contain the movements coordinates. In these the UF:F and UT:F. This means that the coordinate system of the tool coordinate system number currently selected is used.

## API
  [See API page](API.md)

## Acknowledgement
We acknowledge the financial support of this work by the Hungarian State and the European Union under the  EFOP-3.6.1-16-2016-00010 project.

## Bugs, feature requests, etc
Please use the [GitHub issue tracker][].

[GitHub issue tracker]: https://github.com/ABC-iRobotics/fanuc-webcontrol/issues