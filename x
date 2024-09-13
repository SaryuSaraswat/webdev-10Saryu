for (int t = 0; t < T; t++) {
            int D = scanner.nextInt(); // Discount percentage per trial session
            int X = scanner.nextInt(); // Cost of lifetime membership
            int Y = scanner.nextInt(); // Chef's budget
            
            if (Y >= X) {
                System.out.println(0);
                continue;
            }
            
            int minSessions = -1;
            
            for (int n = 0; n <= Y; n++) {
                int remainingBudget = Y - n; // Budget after taking n sessions
                double discountedPrice = X * (100 - D * n) / 100.0; // Effective cost after n sessions
                
                if (remainingBudget >= discountedPrice) {
                    minSessions = n; // Update minimum sessions needed
                    break; // No need to check further as we found the minimum sessions required
                }
            }
            
            System.out.println(minSessions);
        }

        