
# Spec Kit – Quick Start

[Spec Kit](https://github.com/github/spec-kit) is a toolkit for **Spec-Driven Development**.
Instead of starting from code, you first define **specifications (what & why)**, then create a **plan**, split it into **tasks**, and finally **implement** them with the help of AI coding agents.

> 💡 **TH:** Spec Kit ช่วยให้เราพัฒนาแบบเริ่มจาก “สเป็ก” ก่อน (เน้นอะไรและทำไม) จากนั้นค่อยแปลงเป็นแผน → งานย่อย → การเขียนโค้ดจริง โดยใช้ AI agent มาช่วย

---

## Requirements

* **OS**: Linux, macOS, or Windows (with WSL2)
* **Tools**: Git, Python 3.11+, AI coding agent (Claude Code, GitHub Copilot, Cursor, etc.)

> 💡 **TH:** ต้องมี Git, Python เวอร์ชัน 3.11 ขึ้นไป และ AI agent ที่รองรับ เช่น Claude Code, Copilot

---

## Installation

### Persistent installation

```bash
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
```

### One-shot usage

```bash
uvx --from git+https://github.com/github/spec-kit.git specify init <PROJECT_NAME>
```

> 💡 **TH:** เลือกได้ว่าจะติดตั้งถาวร (ใช้ทุกครั้ง) หรือใช้งานครั้งเดียวแบบ one-shot

---

## Usage Workflow

1. **Initialize project**

   ```bash
   specify init <project_name>
   specify init --here   # if you want to init in current folder
   ```

   > **TH:** สร้างโครงสร้างโปรเจกต์ใหม่ หรือ init ในโฟลเดอร์ปัจจุบัน

2. **Check environment**

   ```bash
   specify check
   ```

   > **TH:** ตรวจสอบว่า tools/agent พร้อมใช้งานไหม

3. **Define Constitution**

   ```bash
   /constitution
   ```

   > **TH:** ตั้ง “หลักการโครงการ” เช่น coding guideline, principle → เก็บไว้ใน `.specify/memory/constitution.md`

4. **Write Specification**

   ```bash
   /specify
   ```

   > **TH:** เขียนสเป็ก (what/why) เช่น user story, requirement

5. **Clarify unclear parts**

   ```bash
   /clarify
   ```

   > **TH:** ให้ AI ช่วยถาม-ตอบ เพื่อเติมเต็มสิ่งที่ยังไม่ชัดเจน

6. **Create Technical Plan**

   ```bash
   /plan
   ```

   > **TH:** วางแผนด้านเทคนิค เช่น สถาปัตยกรรม, API, data model

7. **Split into Tasks**

   ```bash
   /tasks
   ```

   > **TH:** แปลงแผนเป็นงานย่อยที่ทำได้จริง

8. **Analyze consistency**

   ```bash
   /analyze
   ```

   > **TH:** ตรวจสอบว่า spec, plan, tasks สอดคล้องกันหรือไม่

9. **Implement**

   ```bash
   /implement
   ```

   > **TH:** ให้ AI ช่วยลงมือ implement → เขียนโค้ด, ติดตั้ง dependency, รันคำสั่ง

---

## Slash Commands

| Command         | Purpose                              | TH อธิบาย                    |
| --------------- | ------------------------------------ | ---------------------------- |
| `specify init`  | Initialize new project               | เริ่มโปรเจกต์ใหม่            |
| `specify check` | Check environment setup              | ตรวจสอบเครื่องมือพร้อมใช้งาน |
| `/constitution` | Define project principles            | สร้าง guideline/proj rules   |
| `/specify`      | Write specifications                 | เขียนข้อกำหนด                |
| `/clarify`      | Clarify unclear parts                | ถาม-ตอบเพื่อความชัดเจน       |
| `/plan`         | Create technical plan                | สร้างแผนงานทางเทคนิค         |
| `/tasks`        | Generate task list                   | แปลงแผนเป็นงานย่อย           |
| `/analyze`      | Analyze consistency across artifacts | ตรวจสอบความสอดคล้อง          |
| `/implement`    | Implement according to tasks         | ให้ AI ลงมือเขียนโค้ด        |

---

## Reference

* GitHub Repository: [github/spec-kit](https://github.com/github/spec-kit)
* Original README: [Spec Kit README](https://github.com/github/spec-kit#readme)
