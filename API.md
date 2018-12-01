#  fanuc-webcontrol API
____

##  Send coordinates to the robot

* **URL**

  `/KAREL/webcontrol?str_mtn_mod=${mtn_mod}&str_coord1=${coord1}&str_coord2=${coord2}&str_coord3=${coord3}&str_coord4=${coord4}&str_coord5=${coord5}&str_coord6=${coord6}`

* **Method:**

  `GET`
  
* **URL Params**

  **Required:**
   
  `mtn_mod=[INTEGER]`
  
  `coord1=[REAL]`
  
  `coord2=[REAL]`
  
  `coord3=[REAL]`
  
  `coord4=[REAL]`
  
  `coord5=[REAL]`
  
  `coord6=[REAL]`
  
* **Data Params**

  mtn_mod value is valid from `1` to `6`:
  
  `1`: Absolute motion in joint space with joint interpolation
  
  `2`: Relative motion in joint space with joint interpolation
  
  `3`: Absolute motion in Chartesian space with linear interpolation
  
  `4`: Absolute motion in Chartesian space with joint interpolation
  
  `5`: Relative motion in Chartesian space with linear interpolation
  
  `6`: Relative motion in Chartesian space with joint interpolation

* **Success Response:**

  * Code: 204

##  Get data from the controller

* **URL**

  `/KAREL/webmonitor`

* **Method:**

  `GET`

* **Success Response:**

  * JSON object:

        {

          "robotid": [ "id " ], 
		  
		  "joint": [ J1, J2, J3, J4, J5, J6 ], 

          "pose": [ X, Y, Z, W, P, R ], 

          "limit": [ xMax, yMax, zMax, xMin, yMin, zMin, j1Max, j2Max, j3Max, j4Max, j5Max, j6Max, j1Min, j2Min, j3Min, j4Min, j5Min, j6Min ] , 

          "status": [ 0, 1 ] , 

          "message": [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		  
		  "timestamp": ["time " ],

          "error": [ 0,"R E S E T " ] 

        }

	**id**: [ Get the robot controller ID from `$FNO` `[STRING]` ]
	
    `J1, J2, J3, J4, J5, J6=[REAL]`
	
	`X, Y, Z, W, P, R=[REAL]`
	
	`xMax, yMax, zMax, xMin, yMin, zMin=[REAL]`
	
	**status**: [ a task running (true(`1`)/false(`0`)) `[INTEGER]`, webmotion running (true(`1`)/false(`0`)) `[INTEGER]`]
	
	**message**: [ position reachable or not (true(`1`)/false(`0`)) `[INTEGER]`, x limit stop (max(`3`)/min(`6`)) `[INTEGER]`, y limit stop (max(`3`)/min(`6`)) `[INTEGER]`, z limit stop (max(`3`)/min(`6`)) `[INTEGER]`, j1 limit stop (max(`3`)/min(`6`)) `[INTEGER]`, j2 limit stop (max(`3`)/min(`6`)) `[INTEGER]`, j3 limit stop (max(`3`)/min(`6`)) `[INTEGER]`, j4 limit stop (max(`3`)/min(`6`)) `[INTEGER]`, j5 limit stop (max(`3`)/min(`6`)) `[INTEGER]`, j6 limit stop (max(`3`)/min(`6`)) `[INTEGER]` ]
	
	**timestamp**: [ The current time from within the KAREL system `[STRING]` ]
	
	**error**: [ error code `[INTEGER]`, error string `[STRING]` ]
	
##  Set the motion limits

* **URL**

  `/KAREL/weblimit?str_limit_id=${limit_id}&str_limit_vl=${limit_vl}`

* **Method:**

  `GET`

* **URL Params**

  **Required:**
  
  `limit_id=[INTEGER]`
  
  `limit_vl=[REAL]`

* **Data Params**

  `limit_id` is valid from `1` to `6`, `11` to `16` and `21` to `26` :
  
  `1`: x max,

  `2`: y max,

  `3`: z max,

  `4`: x min,

  `5`: y min,

  `6`: z min,
  
  `11`: j1 max,

  `12`: j2 max,

  `13`: j3 max,

  `14`: j4 max,

  `15`: j5 max,

  `16`: j6 max,

  `21`: j1 min,

  `22`: j2 min,

  `23`: j3 min,

  `24`: j4 min,

  `25`: j5 min,

  `26`: j6 min,

* **Success Response:**

  * Code: 204

##  Run a KAREL program on the controller

* **URL**

  `/KAREL/karel_program_name`

* **Method:**

  `GET`
  
* **URL Params**

  Default KAREL programs:

  `webabort`:
    * Abort all task to run on the controller (except the tasks that have the `ignore abort request` attribute set),
    * Set the current positions in PR[40] (joint) and PR[41] (Chartesian),
    * Set flags OFF from 1 to 8,
    * Set the R[42] (safety motion register) to 999,
    * Clear webmonitor KAREL program from the memory
  
  `webcheck`:
    * Check the position is reachable
    * Check the position is in the limits
    * Check the safety motion register value
  
  `webcontrol`:
    * Set the required position to the proper position register
    * Set the proper motion mode flag ON

  `webkeep`
    * Reset the safety motion register value

  `weblimit`
    * Set the XYZ limits 

  `webmonitor`
    * Get current coordinates (joint and Chartesian), limit, status, message and error

  `webprogram`
    * Get the program list from the controller
  
  `webreset`
    * Reset the robot controller and abort all task on the controller (except the tasks that have the `ignore abort request` attribute set)

  `webstart`
    * Run the specified task
  
  `webstop`
    * Stop the webmotion program

* **Success Response:**

  * Code: 204

##  Run a TP program on the controller

* **URL**

  `/KAREL/webstart?str_task=${task}`

* **Method:**

  `GET`
  
* **URL Params**

  **Required:**
   
  `task=[STRING]`

* **Data Params**

  The `task` is the TP program name. The default TP program:

  `webmotion`

* **Success Response:**

  * Code: 204