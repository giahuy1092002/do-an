const PATTERN = {
    PHONE: /^\d{10}$/,
    NAME: /^[^0-9_!¡?÷?¿/\\+=@#$%^&*(){}|~<>;:[\]]{2,}$/,
    ID_CARD_PATTERN: /(^\d{9}$|^\d{12}$)/,
    EMAIL: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    ID_PATTERN: /^[a-zA-Z_][a-zA-Z0-9_@#$?/.]*$/
  };
  
  export default PATTERN;