/* Global Styles */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f0f0f0;
}

.container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.left-column, .center-column, .right-column {
    flex: 1;
    min-width: 300px;
}

/* Typography */
h1, h2, h3 {
    color: #2c3e50;
    margin-top: 0;
}

h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

h2 {
    font-size: 20px;
    margin-bottom: 15px;
}

h3 {
    font-size: 18px;
    margin-bottom: 10px;
}

/* Info Boxes */
.info-box {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 20px;
}

/* Facility Chips */
.facility-chip {
    display: inline-block;
    background-color: #e0e0e0;
    padding: 5px 10px;
    margin: 2px;
    border-radius: 20px;
    font-size: 14px;
}

/* Price Info */
.price-info {
    background-color: #e6f3ff;
    padding: 15px;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 20px;
}

#totalPrice {
    font-size: 24px;
    font-weight: bold;
    color: #2ecc71;
}

/* Negotiation Box */
.negotiation-box {
    background-color: #f0f0f0;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 20px;
}

#negotiationSteps {
    list-style-type: none;
    padding-left: 0;
}

#negotiationSteps li {
    margin-bottom: 10px;
    padding-left: 25px;
    position: relative;
}

#negotiationSteps li.completed::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: green;
}

.loading {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid #f3f3f3;
    border-top: 2px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    position: absolute;
    left: 0;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

#negotiationSteps li.in-progress .loading {
    display: inline-block;
}

#negotiationSteps li.completed .loading {
    display: none;
}

/* Map and Button */
.map img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
}

.show-map-btn {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
    transition: background-color 0.3s ease;
}

.show-map-btn:hover {
    background-color: #2980b9;
}

/* Responsive Design */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }

    .left-column, .center-column, .right-column {
        width: 100%;
    }
}

/* Additional Styles */
.detail-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.room-info ul {
    list-style-type: none;
    padding-left: 0;
}

.room-info li {
    margin-bottom: 5px;
}

.savings-info {
    text-align: center;
    font-weight: bold;
    margin-top: 20px;
}

/* Utility Classes */
.text-center {
    text-align: center;
}

.mb-10 {
    margin-bottom: 10px;
}

.mt-20 {
    margin-top: 20px;
}
