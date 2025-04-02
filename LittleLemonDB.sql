/*Product Table*/
CREATE TABLE Products (
    ProductID VARCHAR(20) PRIMARY KEY,
    ProductName VARCHAR(255) NOT NULL,
    Slug VARCHAR(255) UNIQUE NOT NULL,
    ProductDescription TEXT NOT NULL,
    Price FLOAT NOT NULL CHECK (Price >= 0),
    Discount FLOAT CHECK (Discount >= 0 AND Discount <= 100),
    Inventory INT NOT NULL CHECK (Inventory >= 0),
    featured BOOLEAN NOT NULL DEFAULT FALSE,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at DATETIME
);
/*Menu Table*/
CREATE TABLE Menu (
    MenuID INT PRIMARY KEY AUTO_INCREMENT,
    MenuItemsID INT NOT NULL,  -- Khóa ngoại liên kết với bảng MenuItems
    MenuName VARCHAR(255) NOT NULL,
    Cuisine VARCHAR(100) NOT NULL,  -- Loại ẩm thực của menu (ví dụ: Italian, Chinese)
    Slug VARCHAR(255) UNIQUE NOT NULL,
    MenuDescription TEXT NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at DATETIME,
    -- Khóa ngoại liên kết với bảng MenuItems
    FOREIGN KEY (MenuItemsID) REFERENCES MenuItems(MenuItemsID) ON DELETE CASCADE ON UPDATE CASCADE
);
--*MenuItems Table*/
CREATE TABLE MenuItems (
    MenuItemsID INT AUTO_INCREMENT PRIMARY KEY,
    CourseName VARCHAR(255) NOT NULL,  -- Tên món chính
    StarterName VARCHAR(255) NOT NULL,  -- Tên món khai vị
    DesertName VARCHAR(255) NOT NULL,   -- Tên món tráng miệng
    Description TEXT,  -- Mô tả về món ăn
    Category ENUM('Starter', 'Main Course', 'Dessert') NOT NULL,  -- Loại món ăn
    Price DECIMAL(10, 2) NOT NULL CHECK (Price >= 0),  -- Giá món ăn không âm
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,  -- Thời gian tạo
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP  -- Thời gian cập nhật
);

/*Customers Table*/
CREATE TABLE Customers (
    CustomerID VARCHAR(20) PRIMARY KEY,
    FullName VARCHAR(255) NOT NULL,
    Username VARCHAR(255) UNIQUE NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    Password VARCHAR(255) NOT NULL,
    Address VARCHAR(255),
    PostalCode VARCHAR(20),
    Phone VARCHAR(255),
    UserRole BIT(1) NOT NULL DEFAULT 0,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at DATETIME,
    CONSTRAINT chk_email CHECK (Email LIKE '%_@__%.__%')
);

/*Orders Table*/
CREATE TABLE Orders (
    OrderID VARCHAR(20) PRIMARY KEY,
    CustomerID VARCHAR(20) NOT NULL,
    OrderDate DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    Status ENUM('pending', 'confirmed', 'shipped', 'delivered') NOT NULL DEFAULT 'pending',
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID) ON DELETE CASCADE ON UPDATE CASCADE
);

/*OrderDetails Table*/
CREATE TABLE OrderDetails (
    OrderDetailsID INT(11) AUTO_INCREMENT PRIMARY KEY,
    OrderID INT(11) NOT NULL,
    ProductID INT(11) NOT NULL,
    ProductName VARCHAR(255) NOT NULL,
    Quantity INT(11) NOT NULL CHECK (Quantity > 0), -- Số lượng không âm
    Price DECIMAL(10,2) NOT NULL CHECK (Price >= 0), -- Giá không âm
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at DATETIME,
    -- Khóa ngoại liên kết với bảng Orders và Products
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID) ON DELETE CASCADE ON UPDATE CASCADE
);


/*Delivery Table*/
CREATE TABLE Delivery (
    DeliveryID VARCHAR(20) PRIMARY KEY,
    OrderID VARCHAR(20) NOT NULL,
    PostalCode VARCHAR(20),
    DeliveryAddress VARCHAR(255) NOT NULL,
    DeliveryDate DATE NOT NULL,
    DeliveryStatus ENUM('pending', 'shipped', 'delivered', 'failed') NOT NULL DEFAULT 'pending',
    DeliveryMethod ENUM('standard', 'express', 'pickup') NOT NULL DEFAULT 'standard',
    tracking_number VARCHAR(255),
    delivery_cost DECIMAL(10, 2) NOT NULL CHECK (delivery_cost >= 0),
    delivery_notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID) ON DELETE CASCADE ON UPDATE CASCADE
);
/*BookingTable*/
CREATE TABLE Booking (
    BookingID VARCHAR(20) PRIMARY KEY,
    CustomerID VARCHAR(20) NOT NULL,
    CustomerName VARCHAR(255) NOT NULL,
    Phone VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    NumOfGuests INT NOT NULL CHECK (NumOfGuests > 0),
    BookingDate DATE NOT NULL,
    BookingTime DATETIME NOT NULL,
    SpecialRequests TEXT,
    Status ENUM('pending', 'confirmed', 'cancelled') NOT NULL DEFAULT 'pending',
    TableNumber INT NOT NULL CHECK (TableNumber > 0),
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID) ON DELETE CASCADE ON UPDATE CASCADE
);
/*Review Table*/

CREATE TABLE Review (
    ReviewID INT AUTO_INCREMENT PRIMARY KEY,
    CustomerID INT NOT NULL,
    ProductID INT NOT NULL,
    rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5), -- Đảm bảo rating nằm trong khoảng 1 đến 5
    Content TEXT,
    isApprove BOOLEAN NOT NULL DEFAULT FALSE, -- Mặc định là chưa được phê duyệt
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    deleted_at DATETIME,
    -- Khóa ngoại liên kết với bảng Customer và Product
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID) ON DELETE CASCADE ON UPDATE CASCADE
);

/*Cart Table*/
CREATE TABLE Cart (
    CartID INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    usePromotion BOOLEAN NOT NULL DEFAULT FALSE, -- Mặc định là không sử dụng khuyến mãi
    isEmpty BOOLEAN NOT NULL DEFAULT TRUE, -- Giỏ hàng mặc định là trống
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    -- Khóa ngoại liên kết với bảng Users
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE ON UPDATE CASCADE
);
/*CartItem Table*/
CREATE TABLE CartItem (
    CartItemID INT AUTO_INCREMENT PRIMARY KEY,
    CartID INT NOT NULL,
    ProductID VARCHAR(20) NOT NULL,
    Quantity INT NOT NULL CHECK (Quantity > 0), -- Số lượng không âm
    Price FLOAT NOT NULL CHECK (Price >= 0), -- Giá không âm
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    -- Khóa ngoại liên kết với bảng Cart và Products
    FOREIGN KEY (CartID) REFERENCES Cart(CartID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT unique_product_in_cart UNIQUE (CartID, ProductID) -- Đảm bảo mỗi sản phẩm chỉ xuất hiện một lần trong giỏ hàng
);
/*Coupon Table*/
CREATE TABLE Coupon (
    CouponID VARCHAR(10) PRIMARY KEY, -- Khóa chính
    CouponCode VARCHAR(255) UNIQUE NOT NULL, -- Mã giảm giá phải duy nhất
    CouponType ENUM('Percent', 'Fixed') NOT NULL, -- Loại mã giảm giá
    CouponValue DECIMAL(10, 2) NOT NULL CHECK (CouponValue > 0), -- Giá trị mã giảm giá không âm
    StartDate DATE NOT NULL, -- Ngày bắt đầu có hiệu lực
    ExpirationDate DATE NOT NULL, -- Ngày hết hạn
    MinSpending DECIMAL(10, 2) NOT NULL CHECK (MinSpending >= 0), -- Chi tiêu tối thiểu để sử dụng mã giảm giá
    MaxSpending DECIMAL(10, 2) NOT NULL CHECK (MaxSpending >= 0), -- Chi tiêu tối đa
    UserLimit INT NOT NULL CHECK (UserLimit > 0), -- Số lượng người dùng có thể sử dụng mã giảm giá
    CouponLimit INT NOT NULL CHECK (CouponLimit > 0), -- Số lần sử dụng mã giảm giá
    CouponStatus ENUM('Active', 'Expired') NOT NULL DEFAULT 'Active', -- Trạng thái mã giảm giá
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP, -- Thời gian tạo
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- Thời gian cập nhật
    deleted_at DATETIME, -- Thời gian xóa (nếu áp dụng "xóa mềm")
    -- Ràng buộc CHECK để đảm bảo không có mã giảm giá hết hạn được sử dụng
    CHECK (ExpirationDate >= StartDate) 
);
/*Order Coupon*/
CREATE TABLE OrderCoupon (
    OrderCouponID INT AUTO_INCREMENT PRIMARY KEY,
    OrderID VARCHAR(20) NOT NULL,
    CouponID VARCHAR(10) NOT NULL,
    DiscountAmount DECIMAL(10, 2) NOT NULL, -- Số tiền giảm giá đã áp dụng
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (CouponID) REFERENCES Coupon(CouponID) ON DELETE CASCADE ON UPDATE CASCADE
);

--ProductProperties Table
CREATE TABLE ProductProperties (
    PropertiesID INT AUTO_INCREMENT PRIMARY KEY,
    PropertiesName VARCHAR(255) NOT NULL,
    Description VARCHAR(255)
);
--Asset
CREATE TABLE Asset (
    AssetID INT AUTO_INCREMENT PRIMARY KEY,
    filename VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL,  -- Ví dụ: 'image', 'video', 'document'
    size INT NOT NULL CHECK (size > 0),  -- Kích thước file (bytes)
    uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    deleted_at DATETIME
);
--Product_Asset
CREATE TABLE Product_Asset (
    ProductAssetID INT AUTO_INCREMENT PRIMARY KEY,
    ProductID INT NOT NULL,
    AssetID INT NOT NULL,
    PropertiesID INT NOT NULL,  -- Tham chiếu tới thuộc tính sản phẩm
    value VARCHAR(255) NOT NULL,  -- Giá trị của thuộc tính cho tài nguyên (ví dụ: 'Size: Large', 'Type: Vegetarian')
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (AssetID) REFERENCES Asset(AssetID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (PropertiesID) REFERENCES ProductProperties(PropertiesID) ON DELETE CASCADE ON UPDATE CASCADE
);
--Attributes 
    CREATE TABLE Attributes (
    AttributeID INT AUTO_INCREMENT PRIMARY KEY,
    AttributeName VARCHAR(255) NOT NULL,  -- Tên thuộc tính (ví dụ: 'Vegetarian', 'Non-Veg', 'Spicy')
    AttributeDescription TEXT
);
--Location
CREATE TABLE Location (
    PostalCode VARCHAR(10) PRIMARY KEY,  
    Ward VARCHAR(45) NOT NULL,           
    City VARCHAR(45) NOT NULL,           
    Province VARCHAR(45) NOT NULL,       
    Region VARCHAR(45) NOT NULL          
);




