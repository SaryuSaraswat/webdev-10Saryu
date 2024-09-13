for (int j = 0; j<T; j++){
        int D = sc.nextInt(); //discount
        int X = sc.nextInt(); //cost of membership
        int Y = sc.nextInt(); //chef's budget
        
        int trial = 0; 
        boolean canBuy = false;
        
        while (true) {
                int discountedPrice = (int) (X * (100 - trial * D) / 100.0);
                int coinsSpent = trial + discountedPrice;
                
                if (coinsSpent <= Y) {
                    canBuy = true;
                    break;
                }
                
                if (discountedPrice <= 0 || trial >= 100) { // Prevent infinite loop
                    break;
                }
                
                trial++;
            }
            
        
        if(canBuy){
            System.out.println(trial);
        }else{
            System.out.println(-1);
        }
        
    } 