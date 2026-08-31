# Module B - depends on A
from modules.module_a import run_a
def run_b():
    return run_a() + "b"
