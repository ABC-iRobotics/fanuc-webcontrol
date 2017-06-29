# fanuc-webcontrol

## Overview

Simple software to control Fanuc robots through browser.

**NOTE**: It is an experimental version. Do not use this on production systems!


## TOC

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Configuration](#configuration)
4. [Example usage](#example-useage)
5. [Acknowledgement](#acknowledgement)
7. [Bugs, feature requests, etc](#bugs-feature-requests-etc)


## Requirements

This is written in Fanuc Karel language, and tested on FANUC M-430iA2P robot with R-J3iC controller v7.40


## Installation

1. Copy the *.pc and files from the "karel" folder to the robot "MD:" folder
2. Copy the webpanel.htm file from the "examples" folder to the robot "MD:" folder


## Configuration

### Base

Set UNLOCK to HTTP authentication of KAREL: 
1. On the Teach Pendant select Menu -> Setup -> Host Comm
2. Set the cursor on HTTP
3. Push F3[DETAIL]
4. Set the cursor on “A” left side of KAREL. Select F3[UNLOCK]

Set the system variable $KAREL_ENB to 1 when you would like to show .pc file on SELECT screen.

### Predefined positions

Set Position Registers (optional):
1. Push Data -> F1[Type] -> Select Position Reg
2. Choose the program registers from 29 to 35 and record new positions (comments can be very userfull)
3. If these program registers are not free, than you can choose anothers, but you have to update these numbers in the webmotion CONST parameters.


## Example usage

Open a browser and type: http://robotIP/md/webpanel
- JOINT page: jogging the robot by 30 degree
- TCP: move the TCP +/-xyz direction by +/-100mm and/or rotate the tcp in the UFRAME
- POSES: move the TCP to the predefined positions


## Acknowledgement

We acknowledge the financial support of this work by the Hungarian State and the European Union under the  EFOP-3.6.1-16-2016-00010 project.


## Bugs, feature requests, etc

Please use the [GitHub issue tracker][].


[GitHub issue tracker]: https://github.com/ABC-iRobotics/fanuc-webcontrol/issues