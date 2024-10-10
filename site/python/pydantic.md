การจัดการตัวแปรในภาษา python มักจะเจอปัญหาแบบนี้
- จำนวนตัวแปรที่มากต่อการตรวจสอบ
- การรับ - ส่ง ตัวแปร ไปยังแต่ละ module หรือ function ว่าครบหรือไม่
- Check type ของตัวแปรว่าผิดพลาดหรือไม่

เมื่อเจอปัญหาเหล่านี้ dev ก็ต้องมานั่ง check และเสียเวลาในการแก้ไขบัค ปัญหาเหล่านี้จะหมดไป ถ้าคุณใช้ Pydantic!

# What is pydantic
Pydantic is data validation library for Python

Pydantic คือ library สำหรับการจัดการข้อมูล 

## Syntax Highlighting

```python
from pydantic import BaseModel
class UserModel(BaseModel):
    fullname: str
    age: int
    balance: float
    is_active: bool
    created_at: datetime
# Usage
user = UserModel(
    fullname="John Doe",
    age="16",  # Auto casting type
    balance=100.00,
    is_active=True,
    created_at=datetime.now(),
)
print(user)
```


# ถ้าปิด Attribute จะขึ้น error
```python
user = UserModel(
    fullname="John Doe",
    age="16",  # Auto casting type
    balance=100.00,
    # is_active=True,
    created_at=datetime.now(),
)
```



