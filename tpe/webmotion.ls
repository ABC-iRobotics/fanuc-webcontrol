/PROG  WEBMOTION
/ATTR
OWNER		= MNEDITOR;
COMMENT		= "v2";
PROG_SIZE	= 1616;
CREATE		= DATE 17-06-26  TIME 17:33:34;
MODIFIED	= DATE 20-09-14  TIME 17:05:48;
FILE_NAME	= ;
VERSION		= 0;
LINE_COUNT	= 83;
MEMORY_SIZE	= 2052;
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
   1:  JMP LBL[999] ;
   2:   ;
   3:  LBL[7] ;
   4:  WAIT (F[7])    ;
   5:  IF (F[1]),JMP LBL[1] ;
   6:  IF (F[2]),JMP LBL[2] ;
   7:  IF (F[3]),JMP LBL[3] ;
   8:  IF (F[4]),JMP LBL[4] ;
   9:  IF (F[5]),JMP LBL[5] ;
  10:  IF (F[6]),JMP LBL[6] ;
  11:   ;
  12:  LBL[1] ;
  13:  CALL WEBCHECK    ;
  14:  IF (F[8]),JMP LBL[999] ;
  15:J PR[40] 10% FINE    ;
  16:  JMP LBL[999] ;
  17:   ;
  18:  LBL[2] ;
  19:  R[50]=0    ;
  20:  LBL[21] ;
  21:  IF R[50]=R[49],JMP LBL[22] ;
  22:  R[50]=R[50]+1    ;
  23:  R[60]=50+R[50]    ;
  24:  PR[40,R[50]]=PR[40,R[50]]+R[R[60]]    ;
  25:  JMP LBL[21] ;
  26:  LBL[22] ;
  27:  CALL WEBCHECK    ;
  28:  IF (F[8]),JMP LBL[999] ;
  29:J PR[40] 5% CNT100    ;
  30:  JMP LBL[999] ;
  31:   ;
  32:  LBL[3] ;
  33:  CALL WEBCHECK    ;
  34:  IF (F[8]),JMP LBL[999] ;
  35:L PR[41] 50mm/sec FINE    ;
  36:  JMP LBL[999] ;
  37:   ;
  38:  LBL[4] ;
  39:  CALL WEBCHECK    ;
  40:  IF (F[8]),JMP LBL[999] ;
  41:J PR[41] 5% FINE    ;
  42:  JMP LBL[999] ;
  43:   ;
  44:  LBL[5] ;
  45:  PR[41,1]=PR[41,1]+R[51]    ;
  46:  PR[41,2]=PR[41,2]+R[52]    ;
  47:  PR[41,3]=PR[41,3]+R[53]    ;
  48:  PR[41,4]=PR[41,4]+R[54]    ;
  49:  PR[41,5]=PR[41,5]+R[55]    ;
  50:  PR[41,6]=PR[41,6]+R[56]    ;
  51:  CALL WEBCHECK    ;
  52:  IF (F[8]),JMP LBL[999] ;
  53:L PR[41] 50mm/sec CNT100    ;
  54:  JMP LBL[999] ;
  55:   ;
  56:  LBL[6] ;
  57:  PR[41,1]=PR[41,1]+R[51]    ;
  58:  PR[41,2]=PR[41,2]+R[52]    ;
  59:  PR[41,3]=PR[41,3]+R[53]    ;
  60:  PR[41,4]=PR[41,4]+R[54]    ;
  61:  PR[41,5]=PR[41,5]+R[55]    ;
  62:  PR[41,6]=PR[41,6]+R[56]    ;
  63:  CALL WEBCHECK    ;
  64:  IF (F[8]),JMP LBL[999] ;
  65:J PR[41] 5% CNT100    ;
  66:  JMP LBL[999] ;
  67:   ;
  68:  LBL[999] ;
  69:  F[1]=(OFF) ;
  70:  F[2]=(OFF) ;
  71:  F[3]=(OFF) ;
  72:  F[4]=(OFF) ;
  73:  F[5]=(OFF) ;
  74:  F[6]=(OFF) ;
  75:  F[7]=(OFF) ;
  76:  F[8]=(OFF) ;
  77:  R[51]=0    ;
  78:  R[52]=0    ;
  79:  R[53]=0    ;
  80:  R[54]=0    ;
  81:  R[55]=0    ;
  82:  R[56]=0    ;
  83:  JMP LBL[7] ;
/POS
/END
