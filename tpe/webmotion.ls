/PROG  WEBMOTION
/ATTR
OWNER		= MNEDITOR;
COMMENT		= "";
PROG_SIZE	= 1050;
CREATE		= DATE 17-06-26  TIME 17:33:34;
MODIFIED	= DATE 17-08-11  TIME 15:42:44;
FILE_NAME	= ;
VERSION		= 0;
LINE_COUNT	= 54;
MEMORY_SIZE	= 1470;
PROTECT		= READ_WRITE;
TCD:  STACK_SIZE	= 0,
      TASK_PRIORITY	= 50,
      TIME_SLICE	= 0,
      BUSY_LAMP_OFF	= 0,
      ABORT_REQUEST	= 0,
      PAUSE_REQUEST	= 0;
DEFAULT_GROUP	= 1,*,*,*,*;
CONTROL_CODE	= 00000000 00000000;
/MN
   1:  JMP LBL[99] ;
   2:   ;
   3:  LBL[1] ;
   4:  WAIT (F[1])    ;
   5:  R[42]=0    ;
   6:  IF (F[2]),JMP LBL[2] ;
   7:  IF (F[3]),JMP LBL[3] ;
   8:  IF (F[4]),JMP LBL[4] ;
   9:  IF (F[5]),JMP LBL[5] ;
  10:   ;
  11:  LBL[2] ;
  12:  PR[40,R[40]]=PR[40,R[40]]+R[41]    ;
  13:  CALL WEBCHECK    ;
  14:  IF (F[6]),JMP LBL[99] ;
  15:J PR[40] 5% CNT100    ;
  16:  R[42]=R[42]+1    ;
  17:  IF R[42]>5,JMP LBL[99] ;
  18:  JMP LBL[2] ;
  19:   ;
  20:  LBL[3] ;
  21:  PR[41,R[40]]=PR[41,R[40]]+R[41]    ;
  22:  CALL WEBCHECK    ;
  23:  IF (F[6]),JMP LBL[99] ;
  24:L PR[41] 50mm/sec CNT100    ;
  25:  R[42]=R[42]+1    ;
  26:  IF R[42]>5,JMP LBL[99] ;
  27:  JMP LBL[3] ;
  28:   ;
  29:  LBL[4] ;
  30:  PR[41,R[40]]=PR[41,R[40]]+R[41]    ;
  31:  CALL WEBCHECK    ;
  32:  IF (F[6]),JMP LBL[99] ;
  33:J PR[41] 5% CNT100    ;
  34:  R[42]=R[42]+1    ;
  35:  IF R[42]>5,JMP LBL[99] ;
  36:  JMP LBL[4] ;
  37:   ;
  38:  LBL[5] ;
  39:  CALL WEBCHECK    ;
  40:  IF (F[6]),JMP LBL[99] ;
  41:J PR[40] 10% CNT100    ;
  42:  JMP LBL[99] ;
  43:   ;
  44:  LBL[99] ;
  45:  F[1]=(OFF) ;
  46:  F[2]=(OFF) ;
  47:  F[3]=(OFF) ;
  48:  F[4]=(OFF) ;
  49:  F[5]=(OFF) ;
  50:  F[6]=(OFF) ;
  51:  R[40]=0    ;
  52:  R[41]=0    ;
  53:  R[42]=99    ;
  54:  JMP LBL[1] ;
/POS
/END
